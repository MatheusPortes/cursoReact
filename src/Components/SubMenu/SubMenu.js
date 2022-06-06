import React, { useState, useEffect } from 'react'
import { Pages } from './SubMenuProdutos'
import './SubMenu.css'

export default function SubMenu({ classR, selectMenu }) {
  const [subMenu, setSubMenu] = useState([])

  useEffect(() => {
    if(selectMenu) {
      if(selectMenu === 'Pages') {
        setSubMenu(Pages)
      }
    }
  },[selectMenu])
  
  return (
      <ul className={"submenu " + classR}>
        {subMenu.map(({ name, link }) => (
          <li key={name} className={"submenu-li "  + classR}>
            <a className={ classR } href={link}>{name}</a>
          </li>
        ))}
      </ul>
  )
}
