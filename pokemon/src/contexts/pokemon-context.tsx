import { appConfig, homePageConfig } from '@/lib/app-config'
import { getPokemon, getPokemonList } from '@/lib/fetch-pokemon'
import type { Pokemon } from '@/lib/interfaces'
import { getIdFromUrl } from '@/lib/pokemon-helpers'
import { useQuery } from '@tanstack/react-query'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

interface PokemonContextType {
  listError: Error | null
  refetchList: () => void

  // Pokemon list
  displayedPokemons: Pokemon[] | undefined

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

  // background color
  bgColor: string
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined)

interface PokemonProviderProps {
  children: ReactNode
}

export function PokemonProvider({ children }: PokemonProviderProps) {
  const pathname = useLocation().pathname
  const isHomePage = pathname === '/'

  const [searchParams] = useSearchParams()

  // current page
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1,
  )

  // current control
  const [currentControl, setCurrentControl] = useState(
    searchParams.get('control') || homePageConfig.PAGINATION_CTA.value,
  )

  // accumulated pokemon for infinite scroll
  const [accumulatedPokemon, setAccumulatedPokemon] = useState<Pokemon[]>([])

  // Reset accumulated pokemon when switching controls
  useEffect(() => {
    setAccumulatedPokemon([])
  }, [currentControl])

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
    enabled: isHomePage,
  })

  // Get the pokemon details
  const { data: pokemonsListDetails, isLoading: isDetailsLoading } = useQuery({
    queryKey: ['pokemon-details', listData?.results],
    queryFn: async () => {
      if (!listData?.results) return []

      const promises = listData.results.map(async pokemon => {
        const id = getIdFromUrl(pokemon.url)
        return getPokemon(id)
      })

      return Promise.all(promises)
    },
    enabled: !!listData?.results && isHomePage,
  })

  // Handle infinite scroll accumulation
  useEffect(() => {
    if (
      currentControl === homePageConfig.INFINITE_SCROLL_CTA.value &&
      pokemonsListDetails
    ) {
      setAccumulatedPokemon(prev => {
        const existingIds = new Set(prev.map(p => p.id))
        const newPokemon = pokemonsListDetails.filter(
          p => !existingIds.has(p.id),
        )
        return [...prev, ...newPokemon]
      })
    }
  }, [pokemonsListDetails, currentControl])

  const totalPages = listData
    ? Math.ceil(listData.count / appConfig.POKEMON_PER_PAGE)
    : 0

  const isLoading = isListLoading || isDetailsLoading

  // Determine which pokemon to display based on control type
  const displayedPokemons =
    currentControl === homePageConfig.INFINITE_SCROLL_CTA.value
      ? accumulatedPokemon
      : pokemonsListDetails

  const bgColor =
      currentControl === homePageConfig.PAGINATION_CTA.value
        ? homePageConfig.PAGINATION_CTA.bgColor
        : homePageConfig.INFINITE_SCROLL_CTA.bgColor    

  const value: PokemonContextType = {
    listError,
    refetchList,
    displayedPokemons,
    isLoading,
    totalPages,
    // current page
    currentPage,
    setCurrentPage,
    // current control
    currentControl,
    setCurrentControl,
    bgColor,
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
