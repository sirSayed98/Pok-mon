import { Button } from '@/components/ui/button'
import { homePageConfig } from '@/lib/app-config'

import { usePokemon } from '@/contexts/pokemon-context'

export default function Controls() {
  const { setCurrentPage, currentControl, setCurrentControl } = usePokemon()

  const handleChangeControl = (control: string) => {
    setCurrentControl(control)
    window.history.pushState(null, '', `?control=${control}&page=1`)
    setCurrentPage(1)
  }
  return (
    <div className='flex items-center justify-center gap-4'>
      <Button
        className='cursor-pointer'
        variant={
          currentControl === homePageConfig.PAGINATION_CTA.value
            ? 'default'
            : 'secondary'
        }
        onClick={() => handleChangeControl(homePageConfig.PAGINATION_CTA.value)}
      >
        {homePageConfig.PAGINATION_CTA.label}
      </Button>
      <Button
        className='cursor-pointer'
        variant={
          currentControl === homePageConfig.INFINITE_SCROLL_CTA.value
            ? 'default'
            : 'secondary'
        }
        onClick={() =>
          handleChangeControl(homePageConfig.INFINITE_SCROLL_CTA.value)
        }
      >
        {homePageConfig.INFINITE_SCROLL_CTA.label}
      </Button>
    </div>
  )
}
