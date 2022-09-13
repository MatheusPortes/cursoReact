import { Get } from "../API/drag-network-api"

const baseURL = `${process.env.REACT_APP_API_SERVER}/user`

export interface IBuyProducts {
    id_products: number,
    products: {
        id: number,
        name: string,
        price: number
    }
}

export interface ISearchUserProducts {
    id: number,
    login: string,
    email: string
    is_status: true,
    person: {
        id: number,
        name: string,
        cpf: number
    },
    buy_products: IBuyProducts[]
}

export async function searchUserProducts(): Promise<ISearchUserProducts[]> {
    const data = Get(`${baseURL}/product`)
    return data
}
