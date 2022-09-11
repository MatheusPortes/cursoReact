import { Get } from "../API/drag-network-api"

const baseURL = 'https://ranekapi.origamid.dev/json/api/produto'

export interface IFotosProps {
  titulo: string
  src: string
}

export interface ISearchProdutoProps {
  id: string
  nome: string
  preco: number
  descricao: string
  vendido: boolean
  usuario_id: string
  fotos: IFotosProps[]
}

export async function searchTablet(): Promise<ISearchProdutoProps> {
  const data = await Get(`${baseURL}/tablet`)
  return data
}

export const searchSmartphone = async (): Promise<ISearchProdutoProps> => {
  const data = await Get(`${baseURL}/smartphone`)
  return data
}

export const searchNotebook = async (): Promise<ISearchProdutoProps> => {
  const data = await Get(`${baseURL}/notebook`)
  return data
}

export const searchProduto = async (): Promise<ISearchProdutoProps[]> => {
  const data = await Get(`${baseURL}`)
  return data
}