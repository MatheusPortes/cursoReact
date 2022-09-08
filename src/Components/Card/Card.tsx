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
        <div className="out-card">
            <div className="card">
                {/* <div> */}
                    <h4 className="card-title">{infoCard.name}</h4>
                    <div className="card-info">
                        {infoCard.volume_type && (
                            <div>
                                {infoCard.bulk} {infoCard.volume_type?.initials}
                            </div>
                        )}
                        <div className="card-price">{infoCard.price} R$</div>
                    </div>
                {/* </div> */}
                <div className="out-card-quantity">
                    <span className="card-quantity">{infoCard.quantity}</span>
                </div>
            </div>
        </div>
    )
}
