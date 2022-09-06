import ReactSpan from '../../Components/ReactSpan/ReactSpan'
//
import { mais } from '../../Controll/Controll'
import Title from '../../Components/Title/Title'
import { searchProducts } from '../../Service/Protudos/aula_4.service'

export default function Mais() {
  const ts = async () => {
    const data = await searchProducts({ id: 1 , name: `matheus` })
    console.log(data)
  }
  ts()
console.log(`render`)
  return (
    <div>
      <Title text="Mais" />
      {mais.map(({ nome, propriedade }) => (
        <div key={nome} style={{ border: 'solid', margin: 10, padding: 10 }}>
          <Title text={nome} />
          <ul>
            {propriedade.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
      <ReactSpan content="aula - 4" />
    </div>
  )
}
