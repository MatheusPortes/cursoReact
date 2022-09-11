import { Get } from '../API/drag-network-api'

const baseURL = `${process.env.REACT_APP_API_SERVER}/products-color`

export interface IProductsColor {
    id: number,
    color: {
        id: number,
        color: string,
        hex: string
    }
}

export async function searchProductsColorByID(id: number): Promise<IProductsColor[]> {
    const data = await Get(`${baseURL}/${id}`)
    return data
}
