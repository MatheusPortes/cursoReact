import './ReactSpan.css'

interface IReactSpanProps {
  content: string
}

export default function ReactSpan({ content }:IReactSpanProps) {
  return (
    <span className='ReactSpan'>{ content }</span>
  )
}
