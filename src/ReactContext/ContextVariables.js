import React, { useState, createContext, useContext } from 'react'

const ReactContext = createContext()

export default function ContextVariables({ children }) {
  const [loader, setLoader] = useState(false)

  return (
    <ReactContext.Provider
      value={{
        loader,
        setLoader,
      }}
    >
      {children}
    </ReactContext.Provider>
  )
}

export function useLoader(params) {
  const { loader, setLoader } = useContext(ReactContext)
  if(params) {
    setLoader(params)
  }
  return { loader, setLoader }
}
