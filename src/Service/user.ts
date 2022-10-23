import { Get, Post } from "../API/drag-network-api"

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

export type CreateUserProps = {
    user: {
        login: string
        password: string
        email: string
    },
    person: {
        name: string
        cpf: string
        rg: string
        birth_date: string
    }
}

export async function createUser(params: CreateUserProps) {
    const data: any = await Post(`${baseURL}`, params)
    if(data.statusCode !== 200 ) {
        const error = new Error(data.message)
        throw error
    }
}
