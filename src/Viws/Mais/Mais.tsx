import ReactSpan from '../../Components/ReactSpan/ReactSpan'
//
import { mais } from '../../Controll/Controll'
import Title from '../../Components/Title/Title'
import { ISearchProducts, searchProducts } from '../../Service/produtos.service'
import { useEffect, useState } from 'react'
import { Card } from '../../Components/Card/Card'

export default function Mais() {
    const [products, setProducts] = useState<ISearchProducts[]>([])

    useEffect(() => {
        try {
            const run = async () => {
                const data = await searchProducts({ id: 1, name: `matheus` })
                setProducts(data)
                console.log(data)
            }
            run()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div>
            <Title text="Mais" />
            {mais.map(({ nome, propriedade }) => (
                <div
                    key={nome}
                    style={{ border: 'solid', margin: 10, padding: 10 }}
                >
                    <Title text={nome} />
                    <ul>
                        {propriedade.map((propriedade) => (
                            <li key={propriedade}>{propriedade}</li>
                        ))}
                    </ul>
                </div>
            ))}

            {products.map((value) => (
                <Card key={ value.id } infoCard={ value } />
            ))}
            <ReactSpan content="aula - 4" />
        </div>
    )
}
