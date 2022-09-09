import './Title.css'

interface ITitleProps {
  text: string
}

export function Title ({ text }:ITitleProps) {
  return (
    <h1 className="h1-title">{text}</h1>
  )
}