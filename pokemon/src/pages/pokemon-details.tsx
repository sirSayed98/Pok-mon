import NotFoundPokemon from '@/components/details/not-found-pokemon'
import PokemonDetailsCard from '@/components/details/pokemon-details-card'
import PokemonDetailsCardSkeleton from '@/components/details/pokemon-details-card-skeleton'
import { usePokemon } from '@/contexts/pokemon-context'

import { getPokemon } from '@/lib/fetch-pokemon'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { bgColor } = usePokemon()

  const {
    data: pokemon,
    isLoading,
    error,
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
        <NotFoundPokemon pokemonId={id} />
      </div>
    )
  }

  return (
    <div className='min-h-screen' style={{ backgroundColor: bgColor }}>
      <PokemonDetailsCard pokemon={pokemon} />
    </div>
  )
}
