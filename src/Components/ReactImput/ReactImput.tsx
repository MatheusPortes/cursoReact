import React, { useState } from 'react'
import './ReactImput.css'

interface InputReactProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: any
}

export function InputReact({ label, error, ...props }: InputReactProps) {
    const { name, className, type } = props

    const [action, setAction] = useState(false)
    // const [error, setError] = useState(false)
// console.log(error === undefined || error === '' ? true : false )
    return (
        <>
            <div id={`input-react-block`}>
                <label
                    className={`input-react-label ${action ? 'active' : ''}`}
                    htmlFor={name}>{label ? label : name}
                </label>
                <input
                    {...props}
                    className={`input-react ${className}`}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event && props.onChange) {
                            props.onChange(event)
                        }

                        setAction(!!event.target?.value)
                    }}
                />
                {/* {
                    error && <p>error</p>
                } */}
            </div>
        </>
    )
}