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

export const funcSoma = (array) => {
  const size = array.compras.length
  const protudos = array.compras
  let result = 0

  for (let index = 0; index < size; index++) {
    result += parseInt(protudos[index].preco)
  }

  return result
}

export const Filter = (array) => {
  for (let index = 0; index < array.length; index++) {
    array[index].preco = array[index].preco.replace('R$ ', '')
  }
  return array
}

export const Api = async (URL) => {
  const response = await fetch(URL)
    .then((dados) => dados.json())
    .then((dados) => {
      return { content: dados, status: true }
    })
    .catch((error) => {
      console.error(error)
      return { content: error, status: false }
    })
  console.log(response)
}
