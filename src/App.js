import React from 'react'
import Heades from './Components/Header/Heades'
import ReactSection from './Components/ReactSection/ReactSection'
import ContextGlobal from './ReactContext/ContextGlobal'
import { dumbRoutes } from './Rouder/Rouder'

const App = () => {
  const { pathname } = window.location
  let Component = dumbRoutes(pathname)

  return (
    <ContextGlobal>
      <Heades />
      <ReactSection>
        <Component />
      </ReactSection>
    </ContextGlobal>
  )
}

export default App
