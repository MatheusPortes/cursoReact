import SubMenu from '../SubMenu/SubMenu'
import { Form } from '../SubMenu/SubMenuForm'
import { Produtos } from '../SubMenu/SubMenuProdutos'
//
import './header.css'

export default function Heades() {
  return (
    <header className="header">
      <h1 className="header-h1">Curso ReactJS</h1>
      <nav className="header-nav">
        <ul className="header-ul">
          <a className="header-link" href="/Home">
            <li className={'header-li'}>Home</li>
          </a>
          <SubMenu selectMenu={Produtos} name="Produtos" />
          <a className="header-link" href="/Clientes">
            <li className="header-li">Client</li>
          </a>
          <a className="header-link" href="/Mais">
            <li className="header-li">More</li>
          </a>
          <SubMenu selectMenu={Form} name="ReactForm" />
        </ul>
      </nav>
    </header>
  )
}
