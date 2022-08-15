import ContextGlobal from './ReactContext/ContextGlobal';
import Heades from './Components/Header/Heades';
import ReactSection from './Components/ReactSection/ReactSection';
import { dumbRoutes } from './Rouder/Rouder';

function App() {
  const { pathname } = window.location
  let Component = dumbRoutes(pathname)

  return (
    <ContextGlobal>
      <Heades />
      <ReactSection>
        <Component />
      </ReactSection>
    </ContextGlobal>
  );
}

export default App;
