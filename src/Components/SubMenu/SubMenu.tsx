import { useState } from 'react'
import './SubMenu.css'

interface ISubmenuOptions {
  name: string
  link: string
}

interface IMenuOptions {
  name: string
  link: string
  submenu?: ISubmenuOptions[]
}

interface ISubMenuProps {
  name: string
  selectMenu: IMenuOptions[]
}

export default function SubMenu({ selectMenu, name }: ISubMenuProps) {
  const [showMenu, setShowMenu] = useState(false)

  const submenuHandler = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <a className="header-link" href="/FormReact">
        <li
          className={'header-li'}
          onMouseEnter={submenuHandler}
          onMouseLeave={submenuHandler}
        >
          {name}
          {showMenu && (
            <ul className={'submenu'}>
              {selectMenu.map(({ name, link }) => (
                <a href={link}>
                  <li key={name} className={'submenu-li'}>{name}</li>
                </a>
              ))}
            </ul>
          )}
        </li>
      </a>
    </>
  )
}
