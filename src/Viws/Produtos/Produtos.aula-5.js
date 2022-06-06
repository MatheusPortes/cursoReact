import React, { useState } from 'react'
//
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import ReactButton from '../../Components/ReactButton/ReactButton'
import { searchNotebook, searchSmartphone, searchTablet } from '../../API/ConsultProdutos'
//
import './Produtos.css'
import Showcase from '../../Components/Showcase/Showcase'

export default function ProdutosAula5() {
  const [showcase, setShowcase] = useState(null)

  return (
    <div>
      <Title text="Produtos" />

      <ul>
        <ReactButton
          eventOnclick={async () => {
            const date = await searchTablet()
            setShowcase(date)
          }}
          title="tablet"
        />

        <ReactButton
          eventOnclick={async () => {
            const date = await searchSmartphone()
            setShowcase(date)
          }}
          title="smartphone"
        />

        <ReactButton
          eventOnclick={async () => {
            const date = await searchNotebook()
            setShowcase(date)
          }}
          title="notebook"
        />
      </ul>
      {showcase && (
        <Showcase
          title={showcase.content.nome}
          description={showcase.content.descricao}
          urlImg={showcase.content.fotos}
          preco={showcase.content.preco}
          status={showcase.content.vendido}
        />
      )}
      <ReactSpan content="aula - 5" />
    </div>
  )
}
