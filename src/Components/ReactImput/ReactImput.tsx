import React, { useState } from 'react'
import './ReactImput.css'

interface InputReactProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
}

export function InputReact({ label, error, ...props }: InputReactProps) {
    const { name, className } = props

    const [action, setAction] = useState(false)

    if (props && props.type !== 'checkbox') {
        return (
            <>
                <div id={`input-react-block`}>
                    <label
                        className={`input-react-label ${action ? 'active' : ''}`}
                        htmlFor={name}>{label ? label : name}
                    </label>
                    <input
                        {...props}
                        autoComplete='on'
                        className={`input-react ${className}`}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            if (event && props.onChange) {
                                props.onChange(event)
                            }

                            setAction(!!event.target?.value)
                        }}
                    />
                </div>
                {
                    error && <p className='input-warning'>{error}</p>
                }
            </>
        )
    } else {
        return (
            <>
                <label className='react-check-box-label'>
                    <input
                        className='CB'
                        {...props} />
                    {label ? `${label}` : `${name}`}
                </label>
            </>
        )
    }

}