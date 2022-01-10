export const pessoa = [
  {
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
    cliente: 'luana',
    idade: 27,
    compras: [
      { protudo: 'notebook', preco: 2500 },
      { protudo: 'geladeira', preco: 3000 },
      { protudo: 'smatphone', preco: 1500 },
    ],
    status: true,
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
