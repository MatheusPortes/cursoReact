import React, { useState, useEffect } from 'react'
import Title from '../../Components/Title/Title'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import ReactButton from '../../Components/ReactButton/ReactButton'
import Showcase from '../../Components/Showcase/Showcase'
import {
    ISearchProdutoProps,
    searchNotebook,
    searchSmartphone,
} from '../../Service/ranekapi'

export default function ProdutosAula6() {
    const [showcase, setShowcase] = useState<ISearchProdutoProps>()
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
            storage.setItem('name', showcase.nome)
            storage.setItem('price', String(showcase.preco))
        }
    }, [showcase, storage])

    useEffect(() => {
        searchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                <Showcase title={showcase.nome} preco={showcase.preco} />
            )}
            <ReactSpan content="aula - 6" />
        </div>
    )
}
