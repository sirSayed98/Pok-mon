import { clsx, type ClassValue } from "clsx"
import { useSearchParams } from 'react-router-dom'
import { twMerge } from "tailwind-merge"
import { homePageConfig } from './app-config'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const useGetCurrentControl = () => {
  const [searchParams] = useSearchParams()
  const control = searchParams.get('control') || homePageConfig.PAGINATION_CTA.value
  return control
}

export const getBgColor = (control: string) => {  
  return control === homePageConfig.PAGINATION_CTA.value
    ? homePageConfig.PAGINATION_CTA.bgColor
    : homePageConfig.INFINITE_SCROLL_CTA.bgColor
}