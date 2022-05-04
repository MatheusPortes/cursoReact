import React from 'react'
import Heades from './Components/Header/Heades'
import ReactSection from './Components/ReactSection/ReactSection'
import ContextVariables from './ReactContext/ContextVariables'
import { dumbRoutes } from './Rouder/Rouder'

const App = () => {
  const { pathname } = window.location
  let Component = dumbRoutes(pathname)

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
