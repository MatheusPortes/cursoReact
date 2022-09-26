export const pessoa = [
    {
        id: 0,
        cliente: 'mario',
        idade: 31,
        compras: [
            { protudo: 'notebook', preco: 2500 },
            { protudo: 'geladeira', preco: 3000 },
            { protudo: 'smatphone', preco: 1500 },
            { protudo: 'guitarra', preco: 3500 },
        ],
        status: false,
    },
    {
        id: 1,
        cliente: 'luana',
        idade: 27,
        compras: [
            { protudo: 'notebook', preco: 2500 },
            { protudo: 'geladeira', preco: 3000 },
            { protudo: 'smatphone', preco: 1500 },
        ],
        status: true,
    },
    {
        id: 2,
        cliente: 'Matheus',
        idade: 26,
        compras: [
            { protudo: 'notebook', preco: 5500 },
            { protudo: 'geladeira', preco: 1000 },
            { protudo: 'smatphone', preco: 1000 },
        ],
        status: true,
    },
]

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
