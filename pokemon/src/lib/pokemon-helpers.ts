export const formatPokemonId = (id: number): string => {
  return `#${id.toString().padStart(3, '0')}`
}

export const getIdFromUrl = (url: string): number => {
  const parts = url.split('/');
  return parseInt(parts[parts.length - 2]);
}