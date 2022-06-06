import React, { useState, createContext, useContext, useEffect } from 'react'
import { searchProduto } from '../API/ConsultProdutos'

const ReactContextGlobal = createContext()

export default function ContextGlobal({ children }) {
  const [loader, setLoader] = useState(false)
  const [listGlobalProdutos, setListGlobalProdutos] = useState([])

  useEffect(async () => {
    const data = await searchProduto()
    setListGlobalProdutos(data.content)
  },[])

  return (
    <ReactContextGlobal.Provider
      value={{
        loader,
        setLoader,
        listGlobalProdutos,
        setListGlobalProdutos,
      }}
    >
      {children}
    </ReactContextGlobal.Provider>
  )
}

export function useLoader(params) {
  const { loader, setLoader } = useContext(ReactContextGlobal)
  if (params) {
    setLoader(params)
  }
  return { loader, setLoader }
}

export function useListGlobalProdutos() {
  const { listGlobalProdutos, setListGlobalProdutos } =
    useContext(ReactContextGlobal)
  return { listGlobalProdutos, setListGlobalProdutos }
}
