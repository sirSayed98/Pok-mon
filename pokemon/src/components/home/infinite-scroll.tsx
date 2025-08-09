import { usePokemon } from '@/contexts/pokemon-context'
import { appConfig } from '@/lib/app-config'
import { useEffect, useRef } from 'react'

export default function InfiniteScroll() {
  const { currentPage, setCurrentPage, totalPages, isLoading } = usePokemon()
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (target.isIntersecting && !isLoading && currentPage < totalPages) {
          setCurrentPage(currentPage + 1)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: appConfig.INFINITE_SCROLL_ROOT_MARGIN // Trigger 100px before the element comes into view
      }
    )

    const currentElement = observerRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [currentPage, setCurrentPage, totalPages, isLoading])

  // Don't show loading trigger if we've reached the end
  if (currentPage >= totalPages) {
    return (
      <div className='flex flex-col gap-4 justify-center items-center w-full py-8'>
        <p className='text-gray-600'>You've reached the end! 🎉</p>
      </div>
    )
  }

  return (
    <div 
      ref={observerRef}
      className='flex flex-col gap-4 justify-center items-center w-full py-8'
    >
      {isLoading ? (
        <div className='flex items-center gap-2'>
          <div className='animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600'></div>
          <span className='text-gray-600'>Loading more Pokémon...</span>
        </div>
      ) : (
        <div className='text-gray-400'>Scroll down for more Pokémon</div>
      )}
    </div>
  )
}
