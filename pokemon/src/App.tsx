import { PokemonProvider } from '@/contexts/pokemon-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages'
import PokemonDetails from './pages/pokemon-details'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon/:id' element={<PokemonDetails />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
