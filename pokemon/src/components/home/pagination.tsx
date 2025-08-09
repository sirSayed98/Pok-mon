import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { usePokemon } from '@/contexts/pokemon-context'
import { cn } from '@/lib/utils'

import { appConfig } from '@/lib/app-config'

export function PaginationContainer() {
  const { currentPage, setCurrentPage, totalPages } = usePokemon()

  const handlePageChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return
    window.history.pushState(null, '', `?page=${page}`)
    setCurrentPage(page)
  }

  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full'>
      <Pagination>
        <PaginationContent>
          {/* previous */}
          <PaginationItem className='cursor-pointer'>
            <PaginationPrevious
              className={cn(
                'bg-secondary text-primary',
                currentPage === 1 && 'text-muted-foreground',
                currentPage === 1 && 'cursor-not-allowed',
              )}
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {/* loop on 5 pages */}
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <PaginationItem key={index} className='cursor-pointer'>
                <PaginationLink
                  className={cn(
                    'bg-secondary text-primary',
                    currentPage === index + 1 &&
                      'bg-primary text-primary-foreground',
                  )}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          <PaginationItem className='cursor-pointer'>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem className='cursor-pointer'>
            <PaginationLink
              className={cn(
                'bg-secondary text-primary',
                currentPage === totalPages &&
                  'bg-primary text-primary-foreground',
                currentPage === totalPages && 'cursor-not-allowed',
              )}
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>

          {/* next */}
          {/* check if the current page is the last page make it disabled */}
          <PaginationItem className='cursor-pointer'>
            <PaginationNext
              className={cn(
                'bg-secondary text-primary',
                currentPage === totalPages && 'text-muted-foreground',
                currentPage === totalPages && 'cursor-not-allowed',
              )}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className='text-sm text-gray-500'>
        Page {currentPage} of {totalPages} ({appConfig.POKEMON_PER_PAGE} Pokémon
        shown)
      </p>
    </div>
  )
}
