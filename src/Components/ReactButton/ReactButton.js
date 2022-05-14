import React, {useState} from 'react'
import Loader from '../Loader/Loader'
import './ReactButton.css'

export default function ReactButton({ title, eventOnclick }) {
  const [ loader, setLoader ] = useState(false)

  const callback = async () => {
    setLoader( prev => {
      return prev = true
    })

    await eventOnclick()

    setLoader( prev => {
      return prev = false
    })
  } 

  return (
    <div className="ReactButton">
      <button className="ReactButton-in" onClick={callback}>
        {title}

        {loader && <Loader />}
      </button>
    </div>
  )
}
