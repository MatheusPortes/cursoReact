import { ReactNode } from 'react'
import './PageBase.css'

interface IReactSectionProps {
  children: ReactNode
}

export function PageBase({ children }:IReactSectionProps) {
  return (
    <section className='ReactSection col-s1'>{ children }</section>
  )
}
