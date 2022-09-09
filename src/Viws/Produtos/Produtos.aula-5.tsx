import { useState } from 'react'
import { Title } from '../../Components/Title/Title'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Showcase } from '../../Components/Showcase/Showcase'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
import {
    ISearchProdutoProps,
    searchNotebook,
    searchSmartphone,
    searchTablet,
} from '../../Service/ranekapi'
import './Produtos.css'

export function ProdutosAula5() {
    const [showcase, setShowcase] = useState<ISearchProdutoProps>()

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
                    title={showcase.nome}
                    description={showcase.descricao}
                    urlImg={showcase.fotos}
                    preco={showcase.preco}
                    status={showcase.vendido}
                />
            )}
            <ReactSpan content="aula - 5" />
        </div>
    )
}
