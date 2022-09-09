import { useState } from 'react'
import { Loader } from '../Loader/Loader'
import './ReactButton.css'

interface IReactButtonProps {
    title: string
    eventOnclick?: () => void
}

export function ReactButton({ title, eventOnclick }: IReactButtonProps) {
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
            <button className="ReactButton-in" onClick={callback}>
                {title}

                {loader && <Loader />}
            </button>
        </div>
    )
}
