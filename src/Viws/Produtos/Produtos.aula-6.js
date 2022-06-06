import React, { useState, useEffect } from 'react'
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import ReactButton from '../../Components/ReactButton/ReactButton'
import Showcase from '../../Components/Showcase/Showcase'
import { searchNotebook, searchSmartphone } from '../../API/ConsultProdutos'

export default function ProdutosAula6() {
  const [showcase, setShowcase] = useState(null)
  const storage = localStorage

  const searchProducts = async () => {
    let data
    const localStorageSave = storage.getItem('name')
    if (localStorageSave) {
      if (!showcase) {
        if (localStorageSave === 'smartphone') {
          data = await searchSmartphone()
        } else {
          data = await searchNotebook()
        }
      }
    }
    setShowcase(data)
  }

  useEffect(() => {
    if (showcase) {
      storage.clear()
      storage.setItem('name', showcase.content.nome)
      storage.setItem('price', showcase.content.preco)
    }
  }, [showcase, storage])

  useEffect(() => {
    searchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Title text="Preferencia dos Produtos" />
      <ul>
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
          preco={showcase.content.preco}
        />
      )}
      <ReactSpan content="aula - 6" />
    </div>
  )
}
