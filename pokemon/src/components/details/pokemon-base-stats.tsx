import type { Pokemon } from '@/lib/interfaces'

export const BaseStats = ({ stats }: { stats: Pokemon['stats'] }) => {
  return (
    <div>
      <h3 className='text-xl font-bold text-gray-900 mb-4'>Base Stats</h3>
      <div className='space-y-3'>
        {stats.map(stat => {
          const statName = stat.stat.name
            .replace('hp', 'HP')
            .replace('attack', 'Attack')
            .replace('defense', 'Defense')
            .replace('special-attack', 'Sp. Attack')
            .replace('special-defense', 'Sp. Defense')
            .replace('speed', 'Speed')

          return (
            <div key={stat.stat.name}>
              <div className='flex justify-between items-center mb-1'>
                <span className='text-sm font-medium text-gray-700'>
                  {statName}
                </span>
                <span className='text-sm font-bold text-gray-900'>
                  {stat.base_stat}
                </span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                  className='bg-gray-900 h-2 rounded-full'
                  style={{
                    width: `${Math.min((stat.base_stat / 150) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
