import { appConfig } from '@/lib/app-config'
import { Zap } from 'lucide-react'



export default function Header() {
  return (
    <header className='bg-gradient-header py-8 text-center'>
      <h1 className='text-2xl font-bold flex items-center justify-center gap-3'>
        {/* make color of zap icon red */}
        <Zap className='h-8 w-8 text-yellow-500' />
        {appConfig.name}
      </h1>
      <p className='text-muted-foreground text-lg'>{appConfig.description}</p>
    </header>
  )
}
