import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface NotFoundPokemonProps {
  pokemonId?: string | number
  onRetry?: () => void
}

export default function NotFoundPokemon({
  pokemonId,
  onRetry,
}: NotFoundPokemonProps) {
  const navigate = useNavigate()

  const handleReload = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  }

  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='max-w-2xl mx-auto'>
        {/* Error/Not Found Card */}
        <Card className='overflow-hidden bg-white border-0 shadow-lg'>
          {/* Red Header */}
          <div className='bg-gradient-to-r from-red-600 to-red-500 text-white p-6 text-center'>
            <div className='flex items-center justify-center gap-3 mb-2'>
              <AlertCircle className='h-8 w-8' />
              <h1 className='text-2xl font-bold'>
                Something went wrong while loading Pokemon
              </h1>
            </div>

            <p className='text-red-100 font-medium'>ID: #{pokemonId}</p>
          </div>

          {/* Content */}
          <div className='p-8 text-center'>
            {/* Pokeball Icon */}
            <div className='w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center'>
              <div className='w-24 h-24 border-4 border-gray-400 rounded-full relative'>
                <div className='absolute top-1/2 left-0 right-0 h-1 bg-gray-400 transform -translate-y-0.5'></div>
                <div className='absolute top-1/2 left-1/2 w-6 h-6 bg-white border-4 border-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
              </div>
            </div>

            <div className='space-y-4'>
              <h2 className='text-xl font-semibold text-gray-900'>
                Oops! We encountered an error
              </h2>
              <p className='text-gray-600'>
                There was a problem loading the Pokemon data. Please try again.
              </p>
              <p className='text-sm text-gray-500'>
                You can reload the page or browse our Pokemon collection.
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 justify-center mt-8'>
              <Button
                onClick={handleReload}
                className='bg-green-600 hover:bg-green-700 flex items-center gap-2'
              >
                <RefreshCw className='h-4 w-4' />
                Reload
              </Button>
              <Button
                onClick={() => navigate('/')}
                className='bg-blue-600 hover:bg-blue-700'
              >
                Browse All Pokémon
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
