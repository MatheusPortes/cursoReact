import Home from './Home/Home';
import Protudos from './Protudos/Protudos';
import Gasto from './Gasto/Gasto';
import api from './Services/api';
import { useEffect, useState } from 'react';

function App() {
  const [ protudos, setProtudos ] = useState(0)
  let Component = () => {return(<></>)};
    
  // const teste = (string) => {
  //   api
  //     .get('/notebook')
  //     .then((response) => {
  //       setProtudos(response.data)
  //     })
  //     .catch((erro) => console.log('erro', erro));
  // }

  //teste()

  console.log(protudos);

  const muda = () => {
    
    if (window.location.pathname === '/Home') {
      Component = Home;
    }
    if (window.location.pathname === '/Protudos') {
      Component = Protudos;
    }
    if (window.location.pathname === '/Gasto') {
      Component = Gasto;
    }
  }
 
  return (
    <>
      <ul>
        <li>
          <a onClick={ () => muda()} href="/Home">Home</a>
        </li>
        <li>
          <a onClick={ () => muda()} href="/Protudos">Protudos</a>
        </li>
        <li>
          <a onClick={ () => muda()} href="/Gasto">Gastos</a>
        </li>
      </ul>
      <Component />
      <hr />
    </>
  );
}

export default App;
