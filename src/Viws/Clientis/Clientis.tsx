import { useEffect, useState } from 'react'
import { Title } from '../../Components/Title/Title'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
//
import { pessoa } from '../../Controll/Controll'
import { Soma } from '../../Controll/Controll'
import { IBuyProducts, ISearchUserProducts, searchUserProducts } from '../../Service/user'

export const Clientis = () => {
    const [pageClient, setPageClient] = useState(0)
    const [user, setUser] = useState<ISearchUserProducts[]>([])
    const result = Soma(pessoa[pageClient])

    useEffect(() => {
        const run = async () => {
            const data = await searchUserProducts()
            console.log(data)
            setUser(data)
        }
        run()
    },[])

    return (
        <div>
            <Title text="Clientes" />

            <div className="Clientes-nav">
                {pessoa.map(({ cliente, id }) => (
                    <div key={id}>
                        <ReactButton
                            title={cliente}
                            eventOnclick={() => {
                                setPageClient((prev) => (prev = id))
                            }}
                        />
                    </div>
                ))}
            </div>

            {user.map(({ buy_products, email, is_status, login, person }, index) => (
                <div key={index}>
                    <p>{ person.name }</p>
                    <p>{ person.cpf }</p>
                    <p>{ login }</p>
                    <p>{ email }</p>
                    <p>{ is_status }</p>
                    { buy_products.map(({ products }, index) => (
                        <div key={index}>
                            <p>{products.name}</p>
                            <p>{products.price}</p>
                        </div>
                    ))}
                </div>
            ))}

            <p>Cliente: {pessoa[pageClient].cliente}</p>
            <p>Idade: {pessoa[pageClient].idade}</p>
            <p>
                Situação:{' '}
                <span
                    style={
                        pessoa[pageClient].status
                            ? { color: 'green' }
                            : { color: 'red' }
                    }
                >
                    {pessoa[pageClient].status ? 'Ativo' : 'Inativo'}
                </span>
            </p>
            <p>Compras: {result}</p>
            {result > 9999 && (
                <strong className="strong-block">Esta gastando muito</strong>
            )}
            <ReactSpan content="aula - 2" />
        </div>
    )
}
