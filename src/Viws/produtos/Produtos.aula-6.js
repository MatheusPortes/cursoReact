import React, { useState, useEffect } from 'react'
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import { Api } from '../../Controll/Controll'
import ReactButton from '../../Components/ReactButton/ReactButton'
import Showcase from '../../Components/Showcase/Showcase'

export default function ProdutosAula6() {
  const [showcase, setShowcase] = useState(null)
  const storage = localStorage

  const url2 = 'https://ranekapi.origamid.dev/json/api/produto/smartphone'
  const url3 = 'https://ranekapi.origamid.dev/json/api/produto/notebook'

  const searchProducts = async (url) => {
    const date = await Api(url)
    setShowcase(date)
  }

  useEffect(() => {
    if (showcase) {
      storage.clear()
      storage.setItem('name', showcase.content.nome)
      storage.setItem('price', showcase.content.preco)
    }
  }, [showcase,storage])

  useEffect(() => {
    const localStorageSave = storage.getItem('name')
    if (localStorageSave) {
      if (!showcase) {
        if (localStorageSave === 'smartphone') {
          searchProducts(url2)
        } else {
          searchProducts(url3)
        }
      }
    }
  })

  return (
    <div>
      <Title text="Preferencia dos Produtos" />
      <ul>
        <ReactButton
          eventOnclick={async () => {
            const date = await Api(url2)
            setShowcase(date)
          }}
          title="smartphone"
        />

        <ReactButton
          eventOnclick={async () => {
            const date = await Api(url3)
            setShowcase(date)
          }}
          title="notebook"
        />
      </ul>
      {showcase && (
        <Showcase
          title={showcase.content.nome}
          // description={showcase.content.descricao}
          // urlImg={showcase.content.fotos}
          preco={showcase.content.preco}
          // status={showcase.content.vendido}
        />
      )}
      <ReactSpan content="aula - 5" />
    </div>
  )
}
