import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function PokemonCardSkeleton() {
  return (
    <Card
      className={cn(
        'border-border/50 overflow-hidden',
        'animate-pulse'
      )}
    >
      <CardContent className='text-center'>
        {/* Image placeholder */}
        <div className='mb-4 bg-[#f6f7f9]'>
          <div className='w-24 h-24 mx-auto mb-2 flex items-center justify-center'>
            <div className='w-20 h-20 bg-gray-300 rounded-lg' />
          </div>
        </div>

        {/* Name placeholder */}
        <div className='mb-3'>
          <div className='h-6 bg-gray-300 rounded mx-auto w-24' />
        </div>

        {/* Badge placeholder */}
        <div>
          <div className='h-5 bg-gray-300 rounded-full w-16 mx-auto' />
        </div>
      </CardContent>
    </Card>
  )
}
