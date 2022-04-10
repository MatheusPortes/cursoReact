import React from 'react'
import './ReactButton.css'

export default function ReactButton({ title, event }) {
console.log(event)
  return (
    <div className="ReactButton">
      <button className="ReactButton-in" onClick={event}>{title}</button>
    </div>
  )
}
