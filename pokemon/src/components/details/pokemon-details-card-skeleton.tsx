import { Card } from '@/components/ui/card'

export default function PokemonDetailsCardSkeleton() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <Card className='overflow-hidden bg-white border-0 shadow-lg py-0'>
          {/* Purple Header Skeleton */}
          <div className='bg-gradient-to-r from-purple-600 to-purple-500 text-white p-6 text-center'>
            <div className='flex items-center justify-center gap-2 mb-2'>
              <span className='text-2xl'>⚡</span>
              <div className='h-8 w-32 bg-purple-400/50 rounded animate-pulse'></div>
            </div>
            <div className='h-5 w-16 bg-purple-300/50 rounded animate-pulse mx-auto'></div>
          </div>

          <div className='grid lg:grid-cols-2 gap-0'>
            {/* Left Side - Pokemon Image and Basic Info Skeleton */}
            <div className='p-6'>
              {/* Pokemon Image Skeleton */}
              <div className='text-center mb-6'>
                <div className='w-64 h-64 mx-auto mb-4 bg-gray-200 rounded-full animate-pulse flex items-center justify-center'>
                  <div className='w-48 h-48 bg-gray-300 rounded-full animate-pulse'></div>
                </div>
              </div>

              {/* Type Badge Skeleton */}
              <div className='text-center mb-6'>
                <div className='inline-block h-7 w-16 bg-gray-300 rounded-full animate-pulse'></div>
              </div>

              {/* Height and Weight Skeleton */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='text-center'>
                  <div className='flex items-center justify-center gap-2 mb-2'>
                    <div className='h-4 w-4 bg-gray-300 rounded animate-pulse'></div>
                    <div className='h-4 w-12 bg-gray-300 rounded animate-pulse'></div>
                  </div>
                  <div className='h-8 w-16 bg-gray-300 rounded animate-pulse mx-auto'></div>
                </div>
                <div className='text-center'>
                  <div className='flex items-center justify-center gap-2 mb-2'>
                    <div className='h-4 w-4 bg-gray-300 rounded animate-pulse'></div>
                    <div className='h-4 w-12 bg-gray-300 rounded animate-pulse'></div>
                  </div>
                  <div className='h-8 w-16 bg-gray-300 rounded animate-pulse mx-auto'></div>
                </div>
              </div>
            </div>

            {/* Right Side - Stats, Abilities, Experience Skeleton */}
            <div className='p-6 space-y-6'>
              {/* Base Stats Skeleton */}
              <div>
                <div className='h-6 w-24 bg-gray-300 rounded animate-pulse mb-4'></div>
                <div className='space-y-3'>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index}>
                      <div className='flex justify-between items-center mb-1'>
                        <div className='h-4 w-20 bg-gray-300 rounded animate-pulse'></div>
                        <div className='h-4 w-8 bg-gray-300 rounded animate-pulse'></div>
                      </div>
                      <div className='w-full bg-gray-200 rounded-full h-2'>
                        <div className='bg-gray-300 h-2 rounded-full animate-pulse w-3/4'></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abilities Skeleton */}
              <div>
                <div className='h-6 w-20 bg-gray-300 rounded animate-pulse mb-4'></div>
                <div className='space-y-2'>
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <div className='h-5 w-24 bg-gray-300 rounded animate-pulse'></div>
                      {index === 1 && (
                        <div className='h-5 w-14 bg-gray-200 rounded animate-pulse'></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Base Experience Skeleton */}
              <div>
                <div className='h-6 w-32 bg-gray-300 rounded animate-pulse mb-2'></div>
                <div className='h-9 w-20 bg-gray-300 rounded animate-pulse'></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
