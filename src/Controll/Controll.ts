export function QueryString(params: any): string {
    return Object.keys(params)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join('&')
}

interface IFilterProps {
    id: number
    nome: string
    preco: string
    cores: string[]
}

export const Filter = (array: IFilterProps[]) => {
    for (let index = 0; index < array.length; index++) {
        array[index].preco = array[index].preco.replace('R$ ', '')
    }
    return array
}

interface ISomaProps {
    id_products: number,
    products: {
        id: number,
        name: string,
        price: number
    }
}

export const Soma = (array: ISomaProps[]) => {
    let result = 0

    for (let index: number = 0; index < array.length; index++) {
        result += array[index].products.price
    }

    return Number(result.toFixed(2))
}
