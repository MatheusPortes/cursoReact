import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'
import { ISearchProducts, searchProducts } from '../../Service/produtos.service'
import { useEffect, useState } from 'react'
import { Card } from '../../Components/Card/Card'

export function ProdutosAula4() {
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
        <div className='container'>
            <Title text="Produtos" />
            <div className='box-card'>
                {products.map((value) => (
                    <Card key={value.id} infoCard={value} />
                ))}
            </div>
            <ReactSpan content="aula - 4" />
        </div>
    )
}
