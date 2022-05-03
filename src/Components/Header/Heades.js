import React, { useState } from 'react'
import SubMenu from '../SubMenu/SubMenu'
//
import './header.css'

export default function Heades() {
  const [submenu, setSubmenu] = useState(true)
  const submenuHandler = () => {
    setSubmenu(!submenu)
  }

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
          <li
            className="header-li"
            onMouseEnter={submenuHandler}
            onMouseLeave={submenuHandler}
          >
            <a className="header-link" href="/Produtos">
              Products
            </a>
            <SubMenu classR={submenu ? 'hide' : 'show'} />
          </li>
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
        </ul>
      </nav>
    </header>
  )
}
