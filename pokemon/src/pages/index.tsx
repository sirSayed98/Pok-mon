// ui-components
import Controls from '@/components/home/controls'
import Header from '@/components/home/header'
import { PaginationContainer } from '@/components/home/pagination'
import PokemonList from '@/components/home/pokemon-list'

// constants
import { usePokemon } from '@/contexts/pokemon-context'
import { homePageConfig } from '@/lib/app-config'

// react

import InfiniteScroll from '@/components/home/infinite-scroll'

export default function Home() {
  const { currentControl, bgColor } = usePokemon()

  return (
    <div className='min-h-screen' style={{ backgroundColor: bgColor }}>
      {/* Header */}
      <Header />
      <Controls />

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8'>
        <PokemonList />
        {currentControl === homePageConfig.PAGINATION_CTA.value ? (
          <PaginationContainer />
        ) : (
          <InfiniteScroll />
        )}
      </main>
    </div>
  )
}
