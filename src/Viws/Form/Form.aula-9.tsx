import { ReactSpan } from "src/Components/ReactSpan/ReactSpan";
import { Title } from "src/Components/Title/Title";
import { ISearchProducts, searchProducts } from "src/Service/produtos.service";
import { useState, useEffect } from "react"
import { useWarning } from "src/ReactContext/ContextWarning";
import { InputReact } from "src/Components/ReactImput/ReactImput";
import { ReactButton } from "src/Components/ReactButton/ReactButton";
import { IProductsColor, searchProductsColorByID } from "src/Service/product-color";

export function FormAula9() {
    const [selectedProducts, setSelectedProducts] = useState<IProductsColor[]>([])
    const [selectedColos, setSelectedColos] = useState([])
    const [products, setProducts] = useState<ISearchProducts[]>([])

    const { activateWarning } = useWarning()

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        console.log(target.checked)
    }

    useEffect(() => {
        const run = async () => {
            try {
                const data = await searchProducts({})
                setProducts(data)

            } catch (error: any) {
                activateWarning({ type: 'error', message: error.message as string })
                console.error('Erro inesperado: ', error.message)
            }
        }
        run()
    }, [])


    console.log(products)
    return (
        <>
            <Title text="Check Box em React" type='h1' />
            <div className="check-box-section">

                {products.map(({ name, volume_type, bulk, id }) => {
                    return (
                        <ReactButton
                            key={id}
                            onClick={async () => {
                                const data = await searchProductsColorByID(id)
                                setSelectedProducts(data)
                            }}
                            title={`${name} ${bulk !== 1 ? bulk : ''} ${volume_type ? volume_type.initials : ''}`}
                        />
                    )
                })}

                {selectedProducts && selectedProducts.map(({ color }) => {
                    return (
                        <>
                            <InputReact type="checkbox" label={color.color} onClick={ (event: React.MouseEvent<HTMLInputElement>) => {
                                let button = event.target as HTMLInputElement;
                                console.log(button.checked)
                            }}/>
                            <div style={{ backgroundColor: `#${color.hex}`, height: 10, width: 10}} />
                        </>
                    )
                })}

                <div className="display-value">

                </div>
            </div>
            <ReactSpan content="aula - 9" />
        </>
    )
}