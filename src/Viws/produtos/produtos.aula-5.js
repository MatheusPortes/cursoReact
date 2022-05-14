import React, { useState } from 'react'
import { Api } from '../../Controll/Controll'
//
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import ReactButton from  '../../Components/ReactButton/ReactButton'
//
import './Produtos.css'
import Showcase from '../../Components/Showcase/Showcase'

export default function ProdutosAula5() {
  const [ showcase, setShowcase ] = useState(null)

  const url1 = 'https://ranekapi.origamid.dev/json/api/produto/tablet'
  const url2 = 'https://ranekapi.origamid.dev/json/api/produto/smartphone'
  const url3 = 'https://ranekapi.origamid.dev/json/api/produto/notebook'

  return (
    <div>
      <Title text="Produtos" />

      <ul>
        <ReactButton 
          eventOnclick={ async () => {
            const date = await Api(url1)
            setShowcase(date)
          }}
          title="tablet"
        />

        <ReactButton
          eventOnclick={ async () => {
            const date = await Api(url2)
            setShowcase(date)
          }}
          title="smartphone"
        />

        <ReactButton
         eventOnclick={ async () => {
          const date = await Api(url3)
          setShowcase(date)
        }}
          title="notebook"
        />
      </ul>
      {console.log(showcase)}
      {
        showcase && <Showcase 
          title={showcase.content.nome}
          description={showcase.content.descricao}
          urlImg={showcase.content.fotos}
          preco={showcase.content.preco}
          status={showcase.content.vendido}
          />
      }
      <ReactSpan content='aula - 5'/>
    </div>
  )
}
