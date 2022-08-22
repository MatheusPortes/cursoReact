import React from 'react'
import ReactButton from '../../Components/ReactButton/ReactButton'
import ReactSpan from '../../Components/ReactSpan/ReactSpan'
import Title from '../../Components/Title/Title'
import { useListGlobalProdutos } from '../../ReactContext/ContextGlobal'
import './Produtos.css'

export default function ProdutosaAula7() {
  const { listGlobalProdutos, setListGlobalProdutos } = useListGlobalProdutos()

  return (
    <div>
      <Title text="Funções Globais - Listagem de Produtos" />
      <div className="box">
        <ul className="box-ul">
          {listGlobalProdutos &&
            listGlobalProdutos.map(({ nome, descricao }, index) => (
              <div key={index} className="box-ul-box">
                <li className="box-ul-box-li">{nome}</li>
                <span>{descricao}</span>
              </div>
            ))}
        </ul>
        <div className="box-button">
          <a
            href={`http://localhost:${process.env.REACT_APP_PORT}/aula/atividade-7`}
          >
            <ReactButton title="Refresh" />
          </a>
          <ReactButton
            title="Limpar"
            eventOnclick={() => {
              setListGlobalProdutos(null)
            }}
          />
        </div>
      </div>
      <ReactSpan content="aula - 7" />
    </div>
  )
}
