import { ContextGlobal } from './ReactContext/ContextGlobal'
import { Heades } from './Components/Header/Heades'
import { PageBase } from './Components/PageBase/PageBase'
import { dumbRoutes } from './Rouder/Rouder'

function App() {
    const { pathname } = window.location
    let Component = dumbRoutes(pathname)

    return (
        <ContextGlobal>
            <Heades />
            <PageBase>
                <Component />
            </PageBase>
        </ContextGlobal>
    )
}

export default App
