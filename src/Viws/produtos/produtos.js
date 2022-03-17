import { protudo, Filter } from '../../Controll/Controll'
import Title from '../../Components/Title'
import ReactButton from '../../Components/ReactButton/ReactButton'
import { Api } from '../../Controll/Controll'

export default function Produtos() {
  const newProtudo = Filter(protudo)

  const dado = newProtudo.filter(({ preco }) => {
    Number(preco)
    return preco > 1500
  })

  const url1 = 'https://ranekapi.origamid.dev/json/api/produto/tablet'
  const url2 = 'https://ranekapi.origamid.dev/json/api/produto/smartphone'
  const url3 = 'https://ranekapi.origamid.dev/json/api/produto/notebook'

  return (
    <>
      <Title text="Produtos" />
      <ReactButton
        event={() => {
          Api(url1)
        }}
        title="tablet"
      />
      <ReactButton
        event={() => {
          Api(url2)
        }}
        title="smartphone"
      />
      <ReactButton
        event={() => {
          Api(url3)
        }}
        title="notebook"
      />
      {dado.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>{preco}</p>
          <ul>
            {cores.map((cores) => (
              <li key={cores} style={{ color: '#fff', backgroundColor: cores }}>
                {cores}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
