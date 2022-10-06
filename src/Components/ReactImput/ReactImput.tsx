import React, { useState } from 'react'
import './ReactImput.css'

interface InputReactProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: any
}

export function InputReact({ label, ...props }: InputReactProps) {
    const { name, className } = props

    const [action, setAction] = useState(false)
    const [error, setError] = useState(false)

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
                        } else {
                            setError(true)
                        }

                        setAction(!!event.target?.value)
                    }}
                />
                {
                    error && <p>errror</p>
                }
            </div>
        </>
    )
}