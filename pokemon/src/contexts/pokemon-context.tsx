import { appConfig } from '@/lib/app-config'
import { getPokemon, getPokemonList } from '@/lib/fetch-pokemon'
import type { Pokemon, PokemonListResponse } from '@/lib/interfaces'
import { getIdFromUrl } from '@/lib/pokemon-helpers'
import { useQuery } from '@tanstack/react-query'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

interface PokemonContextType {
  // List data
  listData: PokemonListResponse | undefined
  isListLoading: boolean
  listError: Error | null
  refetchList: () => void
  
  // Pokemon details
  pokemonDetails: Pokemon[] | undefined
  isDetailsLoading: boolean

  // current page
  currentPage: number
  setCurrentPage: (page: number) => void
  
  // Combined loading state
  isLoading: boolean
  
  // Pagination
  totalPages: number
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

interface PokemonProviderProps {
  children: ReactNode
}

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [searchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
  
  // Get the pokemon list
  const {
    data: listData,
    isLoading: isListLoading,
    error: listError,
    refetch: refetchList,
  } = useQuery({
    queryKey: ['pokemon-list', currentPage],
    queryFn: () =>
      getPokemonList(
        appConfig.POKEMON_PER_PAGE,
        (currentPage - 1) * appConfig.POKEMON_PER_PAGE,
      ),
  })

  // Get the pokemon details
  const { data: pokemonDetails, isLoading: isDetailsLoading } = useQuery({
    queryKey: ['pokemon-details', listData?.results],
    queryFn: async () => {
      if (!listData?.results) return []

      const promises = listData.results.map(async pokemon => {
        const id = getIdFromUrl(pokemon.url)
        return getPokemon(id)
      })

      return Promise.all(promises)
    },
    enabled: !!listData?.results,
  })

  const totalPages = listData
    ? Math.ceil(listData.count / appConfig.POKEMON_PER_PAGE)
    : 0
  
  const isLoading = isListLoading || isDetailsLoading

  const value: PokemonContextType = {
    listData,
    isListLoading,
    listError,
    refetchList,
    pokemonDetails,
    isDetailsLoading,
    isLoading,
    totalPages,
    currentPage,
    setCurrentPage,
  }

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePokemon() {
  const context = useContext(PokemonContext)
  if (context === undefined) {
    throw new Error('usePokemon must be used within a PokemonProvider')
  }
  return context
}