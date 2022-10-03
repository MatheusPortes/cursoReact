import React from 'react'
import './ImputReact.css'

type ImputReactProps = {

} & React.InputHTMLAttributes<HTMLInputElement>

export function ImputReact({ ...props }: ImputReactProps) {
    const { name } = props

    return (
        <>
            <div className='imput_react'>
                <label htmlFor={name}>{name}</label>
                <input {...props} type="text" />
            </div>

            <p>errror</p>
        </>
    )
}