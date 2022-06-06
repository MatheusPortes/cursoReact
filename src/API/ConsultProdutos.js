import API from "./API"

const baseURL = 'https://ranekapi.origamid.dev/json/api/produto'

export const searchTablet = async () => {
  const data = await API(`${baseURL}/tablet`)
  return data
}

export const searchSmartphone = async () => {
  const data = await API(`${baseURL}/smartphone`)
  return data
}

export const searchNotebook = async () => {
  const data = await API(`${baseURL}/notebook`)
  return data
}

export const searchProduto = async () => {
  const data = await API(`${baseURL}`)
  return data
}