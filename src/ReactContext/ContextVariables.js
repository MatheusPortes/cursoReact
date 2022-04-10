import React, { useState, createContext, useContext } from 'react'

const ReactContext = createContext()

export default function ContextVariables({ children }) {

  return (
    <ReactContext.Provider
      value={{
      }}
    >
      {children}
    </ReactContext.Provider>
  )
}