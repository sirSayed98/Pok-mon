import type { Pokemon, PokemonListResponse } from './interfaces'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getPokemonList(
  limit: number = 20,
  offset: number = 0,
): Promise<PokemonListResponse> {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  )
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon list')
  }
  return response.json()
}


export async function getPokemon(idOrName: string | number): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${idOrName}`);
  }
  return response.json();
}