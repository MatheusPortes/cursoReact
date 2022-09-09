import { ReactNode } from 'react'
import './PageBase.css'

interface IReactSectionProps {
  children: ReactNode
}

export function PageBase({ children }: IReactSectionProps) {
  return (
    <section className='page'>
      <div className='page-base col-s1'>{children}</div>
    </section>
  )
}
