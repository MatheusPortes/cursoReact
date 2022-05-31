import Clientis from '../Viws/Clientis/Clientis'
import Mais from '../Viws/Mais/Mais'
import Home from '../Viws/Home/Home'
import ProdutosAula3 from '../Viws/Produtos/Produtos.aula-3'
import ProdutosAula5 from '../Viws/Produtos/Produtos.aula-5'
import ProdutosAula6 from '../Viws/Produtos/Produtos.aula-6'

export function dumbRoutes(pathname) {
  let Component
  switch (pathname) {
    case '/aula/atividade-6':
      Component = ProdutosAula6
      break
    case '/aula/atividade-5':
      Component = ProdutosAula5
      break
    case '/aula/atividade-3':
      Component = ProdutosAula3
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
