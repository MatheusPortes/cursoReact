import { mais } from '../../Controll/Controll'
import Title from '../../Components/Title'

export default function Mais() {
  console.log(mais)
  return (
    <>
      <Title text="Mais" />
      {mais.map(({ nome, propriedade }) => (
        <div key={nome} style={{ 'border': 'solid', 'margin': 10, 'padding': 10} }>
          <Title text={nome}/>
          <ul>
            {propriedade.map((propriedade) => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
