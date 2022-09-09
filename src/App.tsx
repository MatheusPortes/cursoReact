import { ContextGlobal } from './ReactContext/ContextGlobal'
import { Heades } from './Components/Header/Heades'
import { PageBase } from './Components/PageBase/PageBase'
import { dumbRoutes } from './Rouder/Rouder'
import { Footer } from './Components/Footer/Footer'

function App() {
    const { pathname } = window.location
    let Component = dumbRoutes(pathname)

    return (
        <ContextGlobal>
            <Heades />
            <PageBase>
                <Component />
            </PageBase>
            <Footer />
        </ContextGlobal>
    )
}

export default App
