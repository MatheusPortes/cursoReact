import React, { useState } from 'react'
import './SubMenu.css'

export default function SubMenu({ selectMenu, name }) {
  const [showMenu, setShowMenu] = useState(false)

  const submenuHandler = () => {
    setShowMenu(!showMenu)
  }

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
            {selectMenu.map(({ name, link }) => (
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
