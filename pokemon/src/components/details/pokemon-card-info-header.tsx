export default function PokemonCardInfoHeader({
  name,
  id,
}: {
  name: string
  id: number
}) {
  return (
    <div className='bg-gradient-to-r from-purple-600 to-purple-500 text-white p-6 text-center'>
      <div className='flex items-center justify-center gap-2'>
        <span className='text-2xl'>⚡</span>
        <h1 className='text-2xl font-bold capitalize'>{name}</h1>
      </div>
      <p className='text-purple-100 font-medium'>
        #{id.toString().padStart(3, '0')}
      </p>
    </div>
  )
}
