import { PokemonProvider } from '@/contexts/pokemon-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
