import React, { useState } from 'react'
import './ReactImput.css'

interface InputReactProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export function InputReact({ label, ...props }: InputReactProps) {
    const { name, className } = props

    const [action, setAction] = useState(false)

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
            </div>
            {/* <p>errror</p> */}
        </>
    )
}