import { useState, createContext, useContext, useEffect } from 'react'
import { ISearchProdutoProps, searchProduto } from '../Service/ranekapi'


interface IGlobalContext {
  loader?: boolean
  setLoader: CallableFunction
  listGlobalProdutos?: ISearchProdutoProps[]
  setListGlobalProdutos: CallableFunction
}

interface Props {
  children?: React.ReactNode;
};

const ReactContextGlobal = createContext<IGlobalContext>({} as IGlobalContext)

export function ContextGlobal({ children }:Props) {
  const [loader, setLoader] = useState<boolean>()
  const [listGlobalProdutos, setListGlobalProdutos] = useState<ISearchProdutoProps[]>()

  useEffect(() => {
    const run = async () => {
      const data = await searchProduto()
      setListGlobalProdutos(data)
    }
    run()
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

export function useLoader(params:boolean) {
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
