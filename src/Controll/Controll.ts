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

export const protudo = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29dBD5', '#252A34', '#FC3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1cB', '#f95786'],
    },
]

export const mais = [
    {
        nome: 'Notebook',
        propriedade: ['16gb RAM', '512gb'],
    },
    {
        nome: 'Smartphone',
        propriedade: ['2gb RAM', '128gb'],
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

interface IComprasProps {
    protudo: string
    preco: number
}

interface ISomaProps {
    id: number
    cliente: string
    idade: number
    status: boolean
    compras: IComprasProps[]
}

export const Soma = (array: ISomaProps) => {
    const size = array.compras.length
    const protudos = array.compras
    let result = 0

    for (let index: number = 0; index < size; index++) {
        result += protudos[index].preco
    }

    return result
}
