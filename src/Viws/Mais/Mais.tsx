import ReactSpan from '../../Components/ReactSpan/ReactSpan'
//
import { mais } from '../../Controll/Controll'
import Title from '../../Components/Title/Title'

export default function Mais() {

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
