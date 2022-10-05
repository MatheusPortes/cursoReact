import { useState } from 'react'
import { Loader } from '../Loader/Loader'
import './ReactButton.css'

interface IReactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    eventOnclick?: () => void
}

export function ReactButton({ title, eventOnclick, ...props }: IReactButtonProps) {
    const { className } = props

    const [loader, setLoader] = useState(false)

    const callback = async () => {
        if (eventOnclick) {
            setLoader((prev) => {
                return (prev = true)
            })

            await eventOnclick()

            setLoader((prev) => {
                return (prev = false)
            })
        }
    }

    return (
        <div className="ReactButton">
            <button
                {...props}
                className={`ReactButton-in ${className}`}
            >
                {title}
                {loader && <Loader />}
            </button>
        </div>
    )
}
