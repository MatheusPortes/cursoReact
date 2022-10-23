import { useState, createContext, useContext } from 'react'
import { Warning } from 'src/Components/Warning/Warning';

interface Props {
    children?: React.ReactNode;
}

type TypeProps = {
    type?: 'success' | 'error' | 'info' | 'warning'
}

type WarningProps = {
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
}

type ReactContextWarningPrpos = {
    activateWarning: ({ type, message }: WarningProps) => void
}

export const ReactContextWarning = createContext({} as ReactContextWarningPrpos)

export function ContextWarning({ children }: Props) {
    const [active, setActive] = useState(false)
    const [type, setType] = useState<'success' | 'error' | 'info' | 'warning'>()
    const [message, setMessage] = useState('')

    function activateWarning({ type, message }: WarningProps) {
        setMessage(message)
        setType(type)

        setActive(!active)
        setTimeout(() => setActive(false), 10000)
    }

    return (
        <ReactContextWarning.Provider
            value={{
                activateWarning
            }}
        >
            <Warning active={active} message={message} type={type && type} />
            {children}
        </ReactContextWarning.Provider>
    )
}


export function useWarning() {
    const { activateWarning } = useContext(ReactContextWarning)
    return { activateWarning }
}