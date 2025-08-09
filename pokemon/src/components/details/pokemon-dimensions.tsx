import { Ruler, Weight } from 'lucide-react'

const DimensionCard = ({
  icon,
  label,
  value,
  unit,
}: {
  icon: React.ReactNode
  label: string
  value: number
  unit: string
}) => {
  const calculatedValue = Number((value / 10).toFixed(1))

  return (
    <div className='text-center bg-gray-100 py-3 rounded-lg'>
      <div className='flex items-center justify-center gap-2 mb-2'>
        {icon}
        <span className='text-sm font-medium text-gray-600'>{label}</span>
      </div>
      <p className='text-2xl font-bold text-gray-900'>{calculatedValue} {unit}</p>
    </div>
  )
}

export default function PokemonDimension({
  height,
  weight,
}: {
  height: number
  weight: number
}) {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <DimensionCard
        icon={<Ruler className='h-4 w-4 text-gray-500' />}
        label='Height'
        value={height}
        unit='m'
      />
      <DimensionCard
        icon={<Weight className='h-4 w-4 text-gray-500' />}
        label='Weight'
        value={weight}
        unit='kg'
      />
    </div>
  )
}
