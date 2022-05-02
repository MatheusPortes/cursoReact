import React from 'react'
import { Peges } from '../../Api/api'
import './SubMenu.css'

export default function SubMenu({ classR }) {
  
  return (
      <ul className={"submenu " + classR}>
        {Peges.map(({ name, submenu, link }) => (
          <li key={name} className="submenu-li">
            {name}
            <a href={link}></a>
          </li>
        ))}
      </ul>
  )
}
