import React, { useEffect, useRef, useState } from 'react'
import './InputReact.css'

type InputReactProps = {

} & React.InputHTMLAttributes<HTMLInputElement>

export function InputReact({ ...props }: InputReactProps) {
    const { name, className } = props

    const [action, setAction] = useState(false)

    const element = useRef<HTMLInputElement>(null)
    const ts = element.current

    useEffect(() => {
        console.log(ts?.addEventListener('change', (e: any ) => e.target.value))
        // const elementEventChange =  ts?.addEventListener('change', (e: any ) => e.target.value)
       
        // if (elementEventChange) setAction(true)
        // else setAction(false)

        // console.log(elementEventChange)
    })

    return (
        <>
            <div id='input-react-block'>
                <label
                    className={`input-react-label ${action ? 'active' : ''}`}
                    htmlFor={name}>{name}
                </label>
                <input
                    {...props}
                    ref={element}
                    id='input-label'
                    className={`input-react ${className}`}
                    type="text"
                />
            </div>
            {/* <p>errror</p> */}
        </>
    )
}