import type { Pokemon } from '@/lib/interfaces'

export default function PokemonAbilities({
  abilities,
}: {
  abilities: Pokemon['abilities']
}) {
  return (
    <div>
      <h3 className='text-xl font-bold text-gray-900 mb-4'>Abilities</h3>
      <div className='space-y-2'>
        {abilities.map(ability => (
          <div key={ability.ability.name} className='flex items-center gap-2'>
            <span className='text-gray-700 capitalize'>
              {ability.ability.name.replace('-', ' ')}
            </span>
            {ability.is_hidden && (
              <span className='text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded'>
                (Hidden)
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
