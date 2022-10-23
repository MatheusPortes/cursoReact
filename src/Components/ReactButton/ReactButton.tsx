import { useState } from 'react'
import { Loader } from '../Loader/Loader'
import './ReactButton.css'

interface IReactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
}

export function ReactButton({ title, ...props }: IReactButtonProps) {
    const { className } = props

    const [loader, setLoader] = useState(false)

    return (
        <div className="ReactButton">
            <button
                {...props}
                onClick={async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    setLoader(true)

                    if (event && props.onClick) {
                        await props.onClick(event)
                    }

                    setLoader(false)
                }}
                className={`ReactButton-in ${className}`}
            >
                {title}
                {loader && <Loader />}
            </button>
        </div>
    )
}
