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

export function SubMenu({ selectMenu, name }: ISubMenuProps) {
    const [showMenu, setShowMenu] = useState(false)

    const submenuHandler = () => {
        setShowMenu(!showMenu)
    }

    return (
        <li
            className={'header-li'}
            onMouseEnter={submenuHandler}
            onMouseLeave={submenuHandler}
        >
            {name}
            {showMenu && (
                <ul className={'submenu'}>
                    {selectMenu.map(({ name, link }, index) => (
                        <a key={index} href={link}>
                            <li className={'submenu-li'}>{name}</li>
                        </a>
                    ))}
                </ul>
            )}
        </li>
    )
}
