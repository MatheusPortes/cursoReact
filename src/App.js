import React from 'react'
import Heades from './Components/Header/Heades'
import Home from './Viws/home/home'
import Produtos from './Viws/produtos/produtos'
import Clientis from './Viws/Clientis/Clientis'
import Mais from './Viws/Mais/Mais'
import ReactSection from './Components/ReactSection/ReactSection'
import ContextVariables from './ReactContext/ContextVariables'

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
    <ContextVariables>
      <Heades />
      <ReactSection>
        <Component />
      </ReactSection>
    </ContextVariables>
  )
}

export default App
