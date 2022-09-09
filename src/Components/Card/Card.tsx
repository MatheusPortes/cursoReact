import './Card.css'

type CardProps = {
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

export function Card({ infoCard }: CardProps) {
    return (
        <div className="card">

            <div className="card-container-left">
                <h4 className="card-title">{infoCard.name}</h4>
                {infoCard.volume_type && (
                    <div className="card-info" >{infoCard.bulk} {infoCard.volume_type?.name}</div>
                )}
            </div>

            <div className="card-container-center">
                <div className="card-price">{infoCard.price} R$</div>
            </div>

            <div className="card-container-right">
                <span className="card-quantity">{infoCard.quantity}</span>
            </div >

        </div>
    )
}
