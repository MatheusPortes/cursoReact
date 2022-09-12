import { Get } from "../API/drag-network-api"

const baseURL = `${process.env.REACT_APP_API_SERVER}/user`

export async function searchUserProducts() {
    const data = Get(`${baseURL}/product`)
    return data
}
