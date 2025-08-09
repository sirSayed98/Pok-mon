import { appConfig, homePageConfig } from '@/lib/app-config'
import { getPokemon, getPokemonList } from '@/lib/fetch-pokemon'
import type { Pokemon } from '@/lib/interfaces'
import { getIdFromUrl } from '@/lib/pokemon-helpers'
import { useQuery } from '@tanstack/react-query'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

interface PokemonContextType {
  
  listError: Error | null
  refetchList: () => void

  // Pokemon details
  pokemonDetails: Pokemon[] | undefined

  // current page
  currentPage: number
  setCurrentPage: (page: number) => void

  // current control
  currentControl: string
  setCurrentControl: (control: string) => void

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

  // current page
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1,
  )
  
  // current control
  const [currentControl, setCurrentControl] = useState(
    searchParams.get('control') || homePageConfig.PAGINATION_CTA.value,
  )

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
    listError,
    refetchList,
    pokemonDetails,
    isLoading,
    totalPages,
    // current page
    currentPage,
    setCurrentPage,
    // current control
    currentControl,
    setCurrentControl,
  }

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
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
