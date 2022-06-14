import React, { useState, useEffect } from 'react'
import { Pages } from './SubMenuProdutos'
import { Form } from './SubMenuForm'
import './SubMenu.css'

export default function SubMenu({ selectMenu, name }) {
  const [subMenu, setSubMenu] = useState([])
  const [showMenu, setShowMenu] = useState(false)

  const submenuHandler = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    if (selectMenu) {
      if (selectMenu === 'Pages') {
        setSubMenu(Pages)
      }
      if (selectMenu === 'form') {
        setSubMenu(Form)
      }
    }
  }, [selectMenu])

  return (
    <>
      <li
        className={'header-li'}
        onMouseEnter={submenuHandler}
        onMouseLeave={submenuHandler}
      >
        <a className="header-link" href="/FormReact">
          {name}
        </a>
        {showMenu &&
          <ul className={"submenu"}>
            {subMenu.map(({ name, link }) => (
              <li key={name} className={"submenu-li"}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        }
      </li>
    </>
  )
}
