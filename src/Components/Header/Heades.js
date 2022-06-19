import React, { } from 'react'
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
          <li className={'header-li'}>
            <a className="header-link" href="/Home">
              Home
            </a>
          </li>
          <SubMenu selectMenu={Produtos} name='Produtos' />
          <li className="header-li">
            <a className="header-link" href="/Clientes">
              Client
            </a>
          </li>
          <li className="header-li">
            <a className="header-link" href="/Mais">
              More
            </a>
          </li>
          <SubMenu selectMenu={Form} name='ReactForm' />
        </ul>
      </nav>
    </header>
  )
}
