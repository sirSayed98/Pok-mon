import type { Pokemon } from '@/lib/interfaces'

export default function PokemonImage({
  sprites,
  name,
}: {
  sprites: Pokemon['sprites']
  name: string
}) {
  return (
    <div className='text-center mb-6'>
      <div className='w-64 h-64 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full'>
        <img
          src={
            sprites.other['official-artwork'].front_default ||
            sprites.front_default
          }
          alt={name}
          className='w-48 h-48 object-contain'
        />
      </div>
    </div>
  )
}
