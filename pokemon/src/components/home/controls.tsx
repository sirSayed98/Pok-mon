import { Button } from '@/components/ui/button'
import { useState } from 'react'

const homePageConfig = {
  PAGE_CONTROL_CTA: 'Page Controls',
  INFINITE_SCROLL_CTA: 'Infinite Scroll',
}

export default function Controls() {
  const [currentControl, setCurrentControl] = useState<string>(
    homePageConfig.PAGE_CONTROL_CTA,
  )
  return (
    <div className='flex items-center justify-center gap-4'>
      <Button
        className='cursor-pointer'
        variant={
          currentControl === homePageConfig.PAGE_CONTROL_CTA
            ? 'default'
            : 'secondary'
        }
        onClick={() => setCurrentControl(homePageConfig.PAGE_CONTROL_CTA)}
      >
        {homePageConfig.PAGE_CONTROL_CTA}
      </Button>
      <Button
        className='cursor-pointer'
        variant={
          currentControl === homePageConfig.INFINITE_SCROLL_CTA
            ? 'default'
            : 'secondary'
        }
        onClick={() => setCurrentControl(homePageConfig.INFINITE_SCROLL_CTA)}
      >
        {homePageConfig.INFINITE_SCROLL_CTA}
      </Button>
    </div>
  )
}
