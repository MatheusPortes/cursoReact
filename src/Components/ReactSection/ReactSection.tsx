import { ReactNode } from 'react'
import './ReactSection.css'

interface IReactSectionProps {
  children: ReactNode
}

export default function ReactSection({ children }:IReactSectionProps) {
  return (
    <section className='ReactSection col-s1'>{ children }</section>
  )
}
