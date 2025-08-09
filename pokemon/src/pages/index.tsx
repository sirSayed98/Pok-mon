import Controls from '@/components/home/controls'
import Header from '@/components/home/header'
import { homePageConfig } from '@/lib/app-config'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
  const [searchParams] = useSearchParams()
  const control = searchParams.get('control')
  const [currentControl, setCurrentControl] = useState<string>(
    control ?? homePageConfig.PAGE_CONTROL_CTA.value,
  )

  const bgColor =
    currentControl === homePageConfig.PAGE_CONTROL_CTA.value
      ? homePageConfig.PAGE_CONTROL_CTA.bgColor
      : homePageConfig.INFINITE_SCROLL_CTA.bgColor

  return (
    <div
      className='min-h-screen'
      style={{ backgroundColor: bgColor }}
    >
      {/* Header */}
      <Header />
      <Controls
        setCurrentControl={setCurrentControl}
        currentControl={currentControl}
      />

      {/* Main Content */}
      <main className='container mx-auto px-4 py-12'>// set list here</main>
    </div>
  )
}
