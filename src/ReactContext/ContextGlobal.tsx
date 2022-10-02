import { useState, createContext, useContext, useEffect } from 'react'
import { ISearchProdutoProps, searchProduto } from '../Service/ranekapi'


interface IGlobalContext {
  loader?: boolean
  setLoader: CallableFunction
  listGlobalProdutos?: ISearchProdutoProps[]
  setListGlobalProdutos: CallableFunction
  range: number[]
  setRange: CallableFunction
}

interface Props {
  children?: React.ReactNode;
};

const ReactContextGlobal = createContext<IGlobalContext>({} as IGlobalContext)

export function ContextGlobal({ children }:Props) {
  const [loader, setLoader] = useState<boolean>()
  const [listGlobalProdutos, setListGlobalProdutos] = useState<ISearchProdutoProps[]>()
  const [range, setRange] = useState([0, 1, 2, 3, 4])

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
        range, 
        setRange,
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

export function useRangeCarrossel() {
  const { range, setRange } =
    useContext(ReactContextGlobal)
  return { range, setRange }
}
