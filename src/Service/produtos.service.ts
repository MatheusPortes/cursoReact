import { Get } from "../API/Fetch-API"
import { QueryString } from "../Controll/Controll"

const baseURL = `${process.env.REACT_APP_API_SERVER}/product`

type searchProductsProps = {
    id?: number
    name?: string
}

export interface ISearchProducts {
    id: number,
    name: string,
    price: number,
    quantity: number,
    bulk: number,
    update_at?: string,
    created_at: string,
    volume_type?: {
        id: number,
        name: string,
        initials: string
    }
}

export async function searchProducts(params: searchProductsProps):Promise<ISearchProducts[]> {
    const query = QueryString(params)

    const data = Get(`${baseURL}?${query}`)
    return data
}