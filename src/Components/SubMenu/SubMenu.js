import React, { useState, useEffect } from 'react'
import { Pages } from './SubMenuProdutos'
import { Form } from './SubMenuForm'
import './SubMenu.css'

export default function SubMenu({ classR, selectMenu, showSubmenu }) {
  const [subMenu, setSubMenu] = useState([])

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
      {showSubmenu && (
        <ul className={'submenu ' + classR}>
          {subMenu.map(({ name, link }) => (
            <li key={name} className={'submenu-li ' + classR}>
              <a className={classR} href={link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
