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
        <h4 className="showcase-title">{title}</h4>
        <div className="showcase-in-box">
          <div className="showcase-description">
            <p className="showcase-p">Descrições do Protudo:</p>
            <p className="showcase-p-dynamic">{description}</p>
          </div>
          <div className="showcase-spans">
            <p className="showcase-preco">
              <span>Preço:</span> R$ {preco}</p>
            <p 
              className="showcase-status">
                <span>Estoque: </span>{status !== false?'Disponivel': 'Sem estoque no momento'}
            </p>
          </div>
        </div>
      </div>
      <div 
        className="showcase-img"
        style={{ backgroundImage: `url(${urlImg[0].src})`}}
      >
      </div>
    </div>
  )
}
