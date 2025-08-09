import { ErrorMessage } from '@/components/shared/ErrorMessage'
import { appConfig } from '@/lib/app-config'
import { getPokemon, getPokemonList } from '@/lib/fetch-pokemon'
import { getIdFromUrl } from '@/lib/pokemon-helpers'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PaginationContainer } from './pagination'
import { PokemonCard } from './pokemon-card'
import { PokemonCardSkeleton } from './pokemon-card-skeleton'

export default function PokemonList() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')
  const [currentPage, setCurrentPage] = useState(page ? Number(page) : 1)

  // get the pokemon list
  const {
    data: listData,
    isLoading: isListLoading,
    error: listError,
    refetch,
  } = useQuery({
    queryKey: ['pokemon-list', currentPage],
    queryFn: () =>
      getPokemonList(
        appConfig.POKEMON_PER_PAGE,
        (currentPage - 1) * appConfig.POKEMON_PER_PAGE,
      ),
  })

  // get the pokemon details
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

  // handle page change
  const handlePageChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return
    window.history.pushState(null, '', `?page=${page}`)
    setCurrentPage(page)
  }

  if (listError) {
    return (
      <div className='container mx-auto max-w-4xl'>
        <ErrorMessage
          message='Failed to load Pokémon list. Please try again.'
          onRetry={() => refetch()}
        />
      </div>
    )
  }

  return (
    <>
      {isLoading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-8'>
          {Array.from({ length: 8 }).map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-8'>
            {pokemonDetails?.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => {}}
              />
            ))}
          </div>
          <div className='flex justify-center items-center w-full'>
            <PaginationContainer
              totalPages={totalPages}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </>
  )
}
