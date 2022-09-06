import { Get } from "../../API/Fetch-API"
import { QueryString } from "../../Controll/Controll"

const baseURL = 'http://localhost:8080/product'

type searchProductsProps = {
    id?: number
    name?: string
}

export async function searchProducts(params: searchProductsProps) {
    const query = QueryString(params)

    const data = Get(`${baseURL}?${query}`)
    return data
}