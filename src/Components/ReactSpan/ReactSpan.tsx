import './ReactSpan.css'

interface IReactSpanProps {
  content: string
}

export function ReactSpan({ content }:IReactSpanProps) {
  return (
    <span className='ReactSpan'>{ content }</span>
  )
}
