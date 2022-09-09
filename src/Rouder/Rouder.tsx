import { ProdutosAula3 } from '../Viws/Produtos/Produtos.aula-3'
import { ProdutosAula5 } from '../Viws/Produtos/Produtos.aula-5'
import { ProdutosAula6 } from '../Viws/Produtos/Produtos.aula-6'
import { ProdutosAula7 } from '../Viws/Produtos/Produtos.aula-7'
import { ProdutosAula4 } from '../Viws/Mais/Mais'
import { FormAula8 } from '../Viws/Form/Form.aula-8'
import { Clientis } from '../Viws/Clientis/Clientis'
import { Home } from '../Viws/Home/Home'

export function dumbRoutes(pathname: string) {
    let Component
    switch (pathname) {
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
        case '/aula/atividade-3':
            Component = ProdutosAula3
            break
        case '/Clientes':
            Component = Clientis
            break
        case '/Mais':
            Component = ProdutosAula4
            break
        default:
            Component = Home
            break
    }

    return Component
}
