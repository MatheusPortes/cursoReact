import React from 'react'
import { Peges } from '../../Api/api'
import './SubMenu.css'

export default function SubMenu({ classR }) {
  
  return (
      <ul className={"submenu " + classR}>
        {Peges.map(({ name, link }) => (
          <li key={name} className={"submenu-li "  + classR}>
            <a className={ classR } href={link}>{name}</a>
          </li>
        ))}
      </ul>
  )
}
