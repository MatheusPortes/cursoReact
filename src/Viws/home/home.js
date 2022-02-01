import { pessoa } from '../../Controll/Controll'
import { funcSoma } from '../../Controll/Controll'

const Home = () => {
  const aux = 0
  const result = funcSoma(pessoa[aux])

  return (
    <>
      <p>Cliente: {pessoa[aux].cliente}</p>
      <p>Idade: {pessoa[aux].idade}</p>
    
      <p>Situação: <span style={pessoa[aux].status?{color: 'green'}:{color: 'red'}}>{pessoa[aux].status?'Ativo':'Inativo'}</span></p>
      <p>Compras: { result }</p>
      {result > 9999?<p>Esta gastando muito</p>:<></>}
    </>
  )
}

export default Home
