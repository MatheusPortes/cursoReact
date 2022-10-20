import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'
import { ISearchProducts, searchProducts } from '../../Service/produtos.service'
import { useEffect, useState } from 'react'
import { Card } from '../../Components/Card/Card'
import './Produtos.css'

export function ProdutosAula3_4() {
    const [products, setProducts] = useState<ISearchProducts[]>([])

    useEffect(() => {
        try {
            const run = async () => {
                const data = await searchProducts({ id: 1, name: `matheus` })
                setProducts(data)
            }
            run()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className='container'>
            <Title text="Produtos" type='h1' />
            <div className='box-card'>
                {products.map((value) => (
                    <Card key={value.id} infoCard={value} id={value.id} />
                ))}
            </div>
            <ReactSpan content="aula - 3/4" />
        </div>
    )
}
