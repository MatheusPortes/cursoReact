import React from 'react'

export default function ReactButton({ title, event }) {

  return (
    <div className="ReactButton">
      <button className="ReactButton-in" onClick={event}>{title}</button>
    </div>
  )
}
