import PokemonDetailsCard from '@/components/details/pokemon-details-card'
import { ErrorMessage } from '@/components/shared/ErrorMessage'
import { Button } from '@/components/ui/button'
import { usePokemon } from '@/contexts/pokemon-context'

import { getPokemon } from '@/lib/fetch-pokemon'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

export default function PokemonDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { bgColor } = usePokemon()

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

  if (error) {
    return (
      <div className='min-h-screen bg-background p-4'>
        <div className='container mx-auto max-w-4xl'>
          <div className='mb-6'>
            <Button variant='ghost' onClick={() => navigate(-1)}>
              <ArrowLeft className='h-4 w-4 mr-2' />
              Back
            </Button>
          </div>
          <ErrorMessage
            message='Failed to load Pokémon details. Please try again.'
            onRetry={() => refetch()}
          />
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        is loading
      </div>
    )
  }

  // set Title for the page
  document.title = `${pokemon?.name} - Pokémon`

  if (!pokemon) {
    return (
      <div className='min-h-screen bg-background p-4'>
        <div className='container mx-auto max-w-4xl'>
          <ErrorMessage message='Pokémon not found.' />
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen' style={{ backgroundColor: bgColor }}>
      <PokemonDetailsCard pokemon={pokemon} />
    </div>
  )
}
