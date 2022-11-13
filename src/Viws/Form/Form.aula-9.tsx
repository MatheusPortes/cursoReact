import { ReactSpan } from "src/Components/ReactSpan/ReactSpan";
import { Title } from "src/Components/Title/Title";
import { ISearchProducts, searchProducts } from "src/Service/produtos.service";
import { useState, useEffect, useRef } from "react"
import { useWarning } from "src/ReactContext/ContextWarning";
import { InputReact } from "src/Components/ReactImput/ReactImput";
import { ReactButton } from "src/Components/ReactButton/ReactButton";
import { IProductsColor, searchProductsColorByID } from "src/Service/product-color";

type VolumeTypeProps = {
    id: number;
    name: string;
    initials: string;
}

type ShowSelectedProps = {
    products?: {
        name: string,
        volume_type?: VolumeTypeProps,
        bulk: number,
        idProduct: number
    },
    colors?: {
        name: string,
        hex?: string
    }[],
}

export function FormAula9() {
    const [colors, setColors] = useState<IProductsColor[]>([])
    const [showSelected, setShowSelected] = useState<ShowSelectedProps>({} as ShowSelectedProps)
    const [products, setProducts] = useState<ISearchProducts[]>([])

    const { activateWarning } = useWarning()

    const handleClichButton = async (id: number, name: string, bulk: number, volume_type?: VolumeTypeProps) => {
        const data = await searchProductsColorByID(id)
        setColors(data)

        if (name === showSelected.products?.name) {
            setShowSelected(prev => {
                return {
                    ...prev, products: {
                        name: name,
                        volume_type: volume_type,
                        bulk: bulk,
                        idProduct: id
                    }
                }
            })
        } else {
            const newValue = {
                products: {
                    name: name,
                    volume_type: volume_type,
                    bulk: bulk,
                    idProduct: id
                }
            }
            setShowSelected(newValue)
        }
    }

    const handleClichCheckBox = (event: React.MouseEvent<HTMLInputElement>, hex: string) => {
        const button = event.target as HTMLInputElement;

        if (button.checked) {
            if (!showSelected?.colors) {
                setShowSelected({
                    ...showSelected, colors: [{
                        name: button.name,
                        hex: hex
                    }]
                })
            } else {
                setShowSelected({
                    ...showSelected, colors: [...showSelected.colors, {
                        name: button.name,
                        hex: hex
                    }]
                })
            }
        } else {
            const colors = showSelected.colors
            const newColors = colors?.filter(({ name }) => name !== button.name)
            setShowSelected({ ...showSelected, colors: newColors })
        }
    }

    const handleChecked = (nameColor: string) => {
        const colors = showSelected.colors?.map(({ name }) => name)

        return colors?.includes(nameColor)
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

    return (
        <>
            <Title text="Check Box em React" type='h1' />
            <div className="check-box-section box-flex">
                <div>
                    <Title text="Produtos" type='h4' />
                    {products.map(({ name, volume_type, bulk, id }) => {
                        return (
                            <ReactButton
                                key={id}
                                className="CB-produtos"
                                onClick={() => { handleClichButton(id, name, bulk, volume_type) }}
                                title={`${name} ${bulk !== 1 ? bulk : ''} ${volume_type ? volume_type.initials : ''}`}
                            />
                        )
                    })}
                </div>

                <div>
                    <Title text="Cores Disponiveis para este produto" type='h4' />
                    {colors.length > 0 ? colors.map(({ color }, index) => {
                        return (
                            <div
                                key={index}
                                className="CB-box-label"
                                style={{ backgroundColor: `#${color.hex}` }}
                            >
                                <InputReact
                                    type="checkbox"
                                    checked={handleChecked(color.color)}
                                    name={color.color}
                                    value={color.color}
                                    label={`${color.color} - Hex: #${color.hex}`}
                                    onClick={(event) => {
                                        handleClichCheckBox(event, color.hex)
                                    }} />
                            </div>
                        )
                    }) :
                        <Title text="Não a cores disponíveis para este produto." type='h6' />}
                </div>

                <div className="display-value">
                    <Title text="Itens Escolhidos" type='h4' />
                    <Title text="Produto" type='h6' />
                    <div className="name-products">
                        {showSelected?.products?.name}
                    </div>
                    <Title text="Cores" type='h6' />
                    {showSelected?.colors?.map(({ name }, index) => {
                        return (
                            <div key={index} className="name-colors">
                                {name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <ReactSpan content="aula - 9" />
        </>
    )
}