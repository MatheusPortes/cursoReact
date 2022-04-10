import React, { useState } from 'react'
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import ReactButton from '../../Components/ReactButton/ReactButton'
//
import { pessoa } from '../../Controll/Controll'
import { funcSoma } from '../../Controll/Controll'

const Clientis = () => {
  const [clientPage, setClientPage] = useState(0)
  const result = funcSoma(pessoa[clientPage])
  
  const changeState = (value) => {
    setClientPage((prev) => (prev = value))
  }

  return (
    <div>
      <Title text="Clientes" />

      {/* {pessoa.map(({ cliente }) => (
        <>
          <ReactButton name={cliente} />
        </>
      ))} */}

      <p>Cliente: {pessoa[clientPage].cliente}</p>
      <p>Idade: {pessoa[clientPage].idade}</p>
      <p>
        Situação:{' '}
        <span
          style={
            pessoa[clientPage].status ? { color: 'green' } : { color: 'red' }
          }
        >
          {pessoa[clientPage].status ? 'Ativo' : 'Inativo'}
        </span>
      </p>
      <p>Compras: {result}</p>
      {result > 9999 ? <p>Esta gastando muito</p> : <></>}
      <ReactSpan content="aula - 2" />
    </div>
  )
}

export default Clientis
