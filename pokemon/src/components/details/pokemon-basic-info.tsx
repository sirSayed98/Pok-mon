import type { Pokemon } from '@/lib/interfaces'
import { Badge } from '../ui/badge'
import PokemonImage from './pokemon-image'
import PokemonDimension from './pokemon-dimensions'

export default function PokemonBasicInfo({
  sprites,
  name,
  types,
  height,
  weight,
}: {
  sprites: Pokemon['sprites']
  name: string
  types: Pokemon['types']
  height: number
  weight: number
}) {
  return (
    <div className='p-6'>
      {/* Pokemon Image */}
      <PokemonImage sprites={sprites} name={name} />

      {/* Type Badge */}
      <div className='text-center mb-6'>
        {types.map(type => (
          <Badge
            key={type.type.name}
            className='bg-red-500 hover:bg-red-600 text-white border-0 font-medium text-sm px-4 py-1 rounded-full'
          >
            {type.type.name}
          </Badge>
        ))}
      </div>

      {/* Height and Weight */}
      <PokemonDimension height={height} weight={weight} />
    </div>
  )
}
