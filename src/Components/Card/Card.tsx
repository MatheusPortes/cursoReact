import { useEffect, useState } from 'react'
import { searchProductsColorByID } from '../../Service/product-color'
import './Card.css'

type CardProps = {
    id: number
    infoCard: {
        id?: number
        name?: string
        price?: number
        quantity?: number
        bulk?: number
        update_at?: string
        created_at?: string
        volume_type?: {
            id: number
            name: string
            initials: string
        }
    }
}

export function Card({ infoCard, id }: CardProps) {
    const [color, setColor] = useState<string[]>([])

    useEffect(() => {
        try {
            const run = async () => {
                const data = await searchProductsColorByID(id)
                if (data.length) {
                    const data_color = data.map(({ color }) => {
                        return color.hex
                    })
                    setColor(data_color)
                }
            }
            run()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-block">
                    <div className="card-block-info">
                        <div className="card-block-left">
                            <div>
                                <h4 className="card-title">{infoCard.name}</h4>
                                {infoCard.volume_type && (
                                    <div className="card-info">
                                        {infoCard.bulk}{' '}
                                        {infoCard.volume_type?.name}
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="card-price">
                                    {infoCard.price} R$
                                </div>
                            </div>
                        </div>

                        <div className="card-block-right">
                            <span className="card-quantity">
                                {infoCard.quantity}
                            </span>
                        </div>
                    </div>
                    <div className="card-block-color">
                        <div className="card-color">
                            {color.map(( color, index ) => (
                                <span key={index}
                                    className="button-color"
                                    style={{
                                        backgroundColor: `#${color}`,
                                        boxShadow: `0px 0px 5px 2px #${color}`,
                                    }}
                                />
                            ))}
                        </div>
                        <span className="card-info">{ !!color.length ? 'Cores dispoviveis' : 'Não há cores dispoviveis'}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
