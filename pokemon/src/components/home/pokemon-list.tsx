import { ErrorMessage } from '@/components/shared/ErrorMessage'
import { useNavigate } from 'react-router-dom'

import { PokemonCard } from './pokemon-card'
import { PokemonCardSkeleton } from './pokemon-card-skeleton'

import { usePokemon } from '@/contexts/pokemon-context'
import { homePageConfig } from '@/lib/app-config'

export default function PokemonList() {
  const {
    displayedPokemons,
    listError,
    refetchList,
    isLoading,
    currentControl,
  } = usePokemon()
  const navigate = useNavigate()
  if (listError) {
    return (
      <div className='container mx-auto max-w-4xl'>
        <ErrorMessage
          message='Failed to load Pokémon list. Please try again.'
          onRetry={() => refetchList()}
        />
      </div>
    )
  }

  return (
    <>
      {isLoading && currentControl === homePageConfig.PAGINATION_CTA.value ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-8'>
          {Array.from({ length: 8 }).map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mb-8'>
            {displayedPokemons?.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => {
                  navigate(`/pokemon/${pokemon.id}`)
                }}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
