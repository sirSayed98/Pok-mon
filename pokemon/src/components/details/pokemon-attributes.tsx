import type { Pokemon } from '@/lib/interfaces'
import PokemonAbilities from './pokemon-abilities'
import { BaseStats } from './pokemon-base-stats'

export default function PokemonAttributes({
  stats,
  abilities,
  base_experience,
}: {
  stats: Pokemon['stats']
  abilities: Pokemon['abilities']
  base_experience: number
}) {
  return (
    <div className='p-6 space-y-6'>
      {/* Base Stats */}
      <BaseStats stats={stats} />

      {/* Abilities */}
      <PokemonAbilities abilities={abilities} />

      {/* Base Experience */}
      <div>
        <h3 className='text-xl font-bold text-gray-900 mb-2'>
          Base Experience
        </h3>
        <p className='text-3xl font-bold text-purple-600'>
          {base_experience} XP
        </p>
      </div>
    </div>
  )
}
