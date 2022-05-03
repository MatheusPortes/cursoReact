import React from 'react'
import ReactSpan from  '../../Components/ReactSpan/ReactSpan'
//
import { protudo, Filter } from '../../Controll/Controll'

export default function Produtos() {
  const newProtudo = Filter(protudo)

  const dado = newProtudo.filter(({ preco }) => {
    Number(preco)
    return preco > 1500
  })

  return (
    <>
      {dado.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>{preco}</p>
          <ul>
            {cores.map((cores) => (
              <li key={cores} style={{ color: '#fff', backgroundColor: cores }}>
                {cores}''
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ReactSpan content='aula - 3'/>
    </>
  )
}
