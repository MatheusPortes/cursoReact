import './Title.css'

interface ITitleProps {
  text: string,
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

export function Title({ text, type }: ITitleProps) {

  return (
    <>
      {
        <>
          {type === 'h1' && <h1 className="h1 title">{text}</h1>}
        </>
      }
      {
        <>
          {type === 'h2' && <h2 className="h2 title">{text}</h2>}
        </>
      }
      {
        <>
          {type === 'h3' && <h3 className="h3 title">{text}</h3>}
        </>
      }
      {
        <>
          {type === 'h4' && <h4 className="h4 title">{text}</h4>}
        </>
      }
      {
        <>
          {type === 'h5' && <h5 className="h5 title">{text}</h5>}
        </>
      }
      {
        <>
          {type === 'h6' && <h6 className="h6 title">{text}</h6>}
        </>
      }
      {
        <>
          {type === 'p' && <p className="p title">{text}</p>}
        </>
      }
    </>
  )
}