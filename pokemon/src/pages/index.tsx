import Controls from '@/components/home/controls'
import Header from '@/components/home/header'

export default function Home() {
  return (
    // make color of Background is #e9efff
    <div className='min-h-screen bg-[#e9efff]'>
      {/* Header */}
      <Header />
      <Controls />

      {/* Main Content */}
      <main className='container mx-auto px-4 py-12'>// set list here</main>
    </div>
  )
}
