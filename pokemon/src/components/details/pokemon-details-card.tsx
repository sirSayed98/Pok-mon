import { Card } from '@/components/ui/card'

import type { Pokemon } from '@/lib/interfaces'

// components
import PokemonCardInfoHeader from './pokemon-card-info-header'

import PokemonAttributes from './pokemon-attributes'
import PokemonBasicInfo from './pokemon-basic-info'

export default function PokemonInfoCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <Card className='overflow-hidden bg-white border-0 shadow-lg py-0'>
          {/* Purple Header */}
          <PokemonCardInfoHeader name={pokemon.name} id={pokemon.id} />

          <div className='grid lg:grid-cols-2 gap-0'>
            {/* Left Side - Pokemon Image and Basic Info */}
            <PokemonBasicInfo
              sprites={pokemon.sprites}
              name={pokemon.name}
              types={pokemon.types}
              height={pokemon.height}
              weight={pokemon.weight}
            />

            {/* Right Side - Stats, Abilities, Experience */}
            <PokemonAttributes
              stats={pokemon.stats}
              abilities={pokemon.abilities}
              base_experience={pokemon.base_experience}
            />
          </div>
        </Card>
      </div>
    </main>
  )
}
