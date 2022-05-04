import Produtos from "../Viws/produtos/produtos"
import Clientis from "../Viws/Clientis/Clientis"
import Mais from "../Viws/Mais/Mais"
import Home from "../Viws/home/home"
import produtosAula5 from "../Viws/produtos/produtos.aula-5"

export function dumbRoutes (pathname) {
  let Component
  switch (pathname) {
    case '/aula/atividade-5':
      Component = produtosAula5
      break
    case '/Produtos':
      Component = Produtos
      break
    case '/Clientes':
      Component = Clientis
      break
    case '/Mais':
      Component = Mais
      break
    default:
      Component = Home
      break
  }

  return Component
}
