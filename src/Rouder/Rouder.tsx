import { ProdutosAula3_4 } from '../Viws/Produtos/Produtos.aula-3_4'
import { ProdutosAula5 } from '../Viws/Produtos/Produtos.aula-5'
import { ProdutosAula6 } from '../Viws/Produtos/Produtos.aula-6'
import { ProdutosAula7 } from '../Viws/Produtos/Produtos.aula-7'
import { FormAula8 } from '../Viws/Form/Form.aula-8'
import { Clientis } from '../Viws/Clients/Clients'
import { Home } from '../Viws/Home/Home'
import { FormAula9 } from 'src/Viws/Form/Form.aula-9'

export function dumbRoutes(pathname: string) {
    let Component
    switch (pathname) {
        case '/form/atividade-9':
            Component = FormAula9
            break
        case '/form/atividade-8':
            Component = FormAula8
            break
        case '/aula/atividade-7':
            Component = ProdutosAula7
            break
        case '/aula/atividade-6':
            Component = ProdutosAula6
            break
        case '/aula/atividade-5':
            Component = ProdutosAula5
            break
        case '/aula/atividade-3-4':
            Component = ProdutosAula3_4
            break
        case '/Clientes':
            Component = Clientis
            break
        default:
            Component = Home
            break
    }

    return Component
}
