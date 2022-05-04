import React from 'react'
import Loader from '../Loader/Loader'
import './ReactButton.css'

export default function ReactButton({ title, event }) {
  return (
    <div className="ReactButton">
      <button className="ReactButton-in" onClick={event}>
        {title}

        <Loader />
      </button>
    </div>
  )
}
