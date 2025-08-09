import NotFoundPokemon from '@/components/details/not-found-pokemon'
import PokemonDetailsCard from '@/components/details/pokemon-details-card'
import PokemonDetailsCardSkeleton from '@/components/details/pokemon-details-card-skeleton'
import { Button } from '@/components/ui/button'

import { getPokemon } from '@/lib/fetch-pokemon'
import { getBgColor, useGetCurrentControl } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const bgColor = getBgColor(useGetCurrentControl())

  const {
    data: pokemon,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['pokemon-detail', id],
    queryFn: () => getPokemon(id!),
    enabled: !!id,
  })

  if (!id) {
    navigate('/')
    return null
  }

  if (isLoading) {
    return (
      <div className='min-h-screen' style={{ backgroundColor: bgColor }}>
        <PokemonDetailsCardSkeleton />
      </div>
    )
  }

  // set Title for the page
  document.title = `${pokemon?.name} - Pokémon`

  if (!pokemon || error) {
    return (
      <div className='min-h-screen bg-background'>
        <NotFoundPokemon pokemonId={id} onRetry={() => refetch()} />
      </div>
    )
  }

  return (
    <div className='min-h-screen' style={{ backgroundColor: bgColor }}>
      <div className='container mx-auto px-4 py-8'>
        <Button className='cursor-pointer' variant='outline' onClick={() => navigate('/')}>
          Back to List
        </Button>
      </div>
      <PokemonDetailsCard pokemon={pokemon} />
    </div>
  )
}
