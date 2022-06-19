import './Showcase.css'

interface IFotosProps {
  titulo: string
  src: string
}

interface IShowCaseProps {
  title: string
  description?: string
  urlImg?: IFotosProps[]
  preco: number
  status?: boolean
}

export default function Showcase({
  title,
  description,
  urlImg,
  preco,
  status,
}:IShowCaseProps) {
  return (
    <div className="showcase">
      <div className="showcase-box">
        {title && <h4 className="showcase-title">{title}</h4>}
        <div className="showcase-in-box">
          {description && (
            <div className="showcase-description">
              <p className="showcase-p">Descrições do Protudo:</p>
              <p className="showcase-p-dynamic">{description}</p>
            </div>
          )}
          <div className="showcase-spans">
            {preco && (
              <p className="showcase-preco">
                <span>Preço:</span> R$ {preco}
              </p>
            )}
            {status && (
              <p className="showcase-status">
                <span>Estoque: </span>
                {status? 'Disponivel' : 'Sem estoque no momento'}
              </p>
            )}
          </div>
        </div>
      </div>
      {urlImg &&
      urlImg.map(({src}, index) => (
        (
          <div key={index}
            className="showcase-img"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        )
      )) 
      }
    </div>
  )
}
