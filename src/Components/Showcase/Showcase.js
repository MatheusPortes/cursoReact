import React from 'react'
//
import './Showcase.css'

export default function Showcase({
  title,
  description,
  urlImg,
  preco,
  status,
}) {
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
                {status !== false ? 'Disponivel' : 'Sem estoque no momento'}
              </p>
            )}
          </div>
        </div>
      </div>
      {urlImg &&
      urlImg.map((url, index) => (
        (
          <div key={index}
            className="showcase-img"
            style={{ backgroundImage: `url(${url.src})` }}
          ></div>
        )
      )) 
      }
    </div>
  )
}
