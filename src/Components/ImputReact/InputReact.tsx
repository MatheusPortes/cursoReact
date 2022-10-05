import React, { useEffect, useRef, useState } from 'react'
import './InputReact.css'

type InputReactProps = {
    
} & React.InputHTMLAttributes<HTMLInputElement>

export function InputReact({ ...props }: InputReactProps) {
    const { name, className } = props

    const [action, setAction] = useState(false)

    const element = useRef<HTMLInputElement>(null)

    function handleChange(event: any) {
        console.log(event.targe?.value);
      }

    
    useEffect(() => {
        element.current?.addEventListener('onChange', (e) => handleChange)
        console.log()

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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAction(!!event.target?.value)
                        if(event && props.onChange) {
                            props.onChange(event)
                        }
                    }}
                />
            </div>
            {/* <p>errror</p> */}
        </>
    )
}