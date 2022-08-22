import React, { useState } from 'react'
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import ReactButton from '../../Components/ReactButton/ReactButton'
//
import { pessoa } from '../../Controll/Controll'
import { Soma } from '../../Controll/Controll'

const Clientis = () => {
  const [pageClient, setPageClient] = useState(0)
  const result = Soma(pessoa[pageClient])

  return (
    <div>
      <Title text="Clientes" />

      <div className="Clientes-nav">
        {pessoa.map(({ cliente, id }) => (
          <div key={id}>
            <ReactButton
              title={cliente}
              eventOnclick={() => {
                setPageClient((prev) => (prev = id))
              }}
            />
          </div>
        ))}
      </div>

      <p>Cliente: {pessoa[pageClient].cliente}</p>
      <p>Idade: {pessoa[pageClient].idade}</p>
      <p>
        Situação:{' '}
        <span
          style={
            pessoa[pageClient].status ? { color: 'green' } : { color: 'red' }
          }
        >
          {pessoa[pageClient].status ? 'Ativo' : 'Inativo'}
        </span>
      </p>
      <p>Compras: {result}</p>
      {result > 9999 && <strong className='strong-block'>Esta gastando muito</strong>}
      <ReactSpan content="aula - 2" />
    </div>
  )
}

export default Clientis
