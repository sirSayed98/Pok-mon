import { Button } from '@/components/ui/button'
import { homePageConfig } from '@/lib/app-config'



export default function Controls({
  setCurrentControl,
  currentControl,
}: {
  setCurrentControl: (control: string) => void
  currentControl: string
}) {
  const handleChangeControl = (control: string) => {
    setCurrentControl(control)
    window.history.pushState(null, '', `?control=${control}`)
  }
  return (
    <div className='flex items-center justify-center gap-4'>
      <Button
        className='cursor-pointer'
        variant={
          currentControl === homePageConfig.PAGE_CONTROL_CTA.value
            ? 'default'
            : 'secondary'
        }
        onClick={() =>
          handleChangeControl(homePageConfig.PAGE_CONTROL_CTA.value)
        }
      >
        {homePageConfig.PAGE_CONTROL_CTA.label}
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
