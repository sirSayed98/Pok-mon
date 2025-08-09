import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Pokemon } from '@/lib/interfaces'
import { formatPokemonId } from '@/lib/pokemon-helpers'
import { cn } from '@/lib/utils'

interface PokemonCardProps {
  pokemon: Pokemon
  onClick?: () => void
}

export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <Card
      className={cn(
        'group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl',
        'border-border/50 overflow-hidden',
      )}
      onClick={onClick}
    >
      <CardContent className='text-center'>
        <div className='mb-4 bg-[#f6f7f9]'>
          <div className='w-24 h-24 mx-auto mb-2  flex items-center justify-center'>
            <img
              src={
                pokemon.sprites.other['official-artwork'].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
              className='w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300'
              loading='lazy'
            />
          </div>
        </div>

        <h3 className='font-semibold text-lg mb-3 capitalize text-foreground'>
          {pokemon.name}
        </h3>
        <div>
          <Badge variant='secondary' className='text-xs font-mono'>
            {formatPokemonId(pokemon.id)}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
