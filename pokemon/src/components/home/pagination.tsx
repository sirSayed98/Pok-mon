import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'

export function PaginationContainer({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}) {
  return (
    <Pagination>
      <PaginationContent>
        {/* previous */}
        <PaginationItem className='cursor-pointer'>
          <PaginationPrevious
          className={cn(
            'bg-secondary text-primary',
            currentPage === 1 &&
              'text-muted-foreground',
            currentPage === 1 && 'cursor-not-allowed',
          )}
            onClick={() => onPageChange(currentPage - 1)}
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
                onClick={() => onPageChange(index + 1)}
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
            onClick={() => onPageChange(totalPages)}
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
              currentPage === totalPages &&
                'text-muted-foreground',
              currentPage === totalPages && 'cursor-not-allowed',
            )}
            onClick={() => onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
