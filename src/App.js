import Home from './Viws/home/home'
import Produtos from './Viws/produtos/produtos'
import Clientis from './Viws/Clientis/Clientis'
import Mais from './Viws/Mais/Mais'

const App = () => {
  const { pathname } = window.location
  let Component

  switch (pathname) {
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

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/Home">HOME</a>
          </li>
          <li>
            <a href="/Produtos">PRODUTOS</a>
          </li>
          <li>
            <a href="/Clientes">CLIENTE</a>
          </li>
          <li>
            <a href="/Mais">MAIS PRODUTOS</a>
          </li>
        </ul>
      </nav>
      <Component />
    </>
  )
}

export default App
