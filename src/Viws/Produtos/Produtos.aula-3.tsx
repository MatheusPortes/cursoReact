import ReactSpan from  '../../Components/ReactSpan/ReactSpan'
import Title from '../../Components/Title/Title'
//
import { protudo, Filter } from '../../Controll/Controll'

export default function ProdutosAula3() {
  const newProtudo = Filter(protudo)

  const dado = newProtudo.filter(({ preco }) => {
    const value = preco.replace('R$ ', '')
    return Number(value) > 1500
  })

  return (
    <>
      {dado.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <Title text={nome}/>
          <p><span>Preço:</span> R$ {preco}</p>
          <ul>
            <p>Cores: </p>
            {cores.map((cores) => (
              <li key={cores} style={{ color: '#fff', backgroundColor: cores }}>
                {cores}''
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ReactSpan content='aula - 3'/>
    </>
  )
}
