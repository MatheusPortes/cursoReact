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
    action: boolean | undefined,
    setAction: CallableFunction
}

export const ReactContextWarning = createContext({} as ReactContextWarningPrpos)

export function ContextWarning({ children }: Props) {
    const [action, setAction] = useState<boolean>()
    const [type, setType] = useState<'success' | 'error' | 'info' | 'warning'>()
    const [message, setMessage] = useState('')

    function activateWarning({ type, message }: WarningProps) {
        setMessage(message)
        setType(type)

        setAction(!action)
        setTimeout(() => setAction(false), 10000)
    }

    return (
        <ReactContextWarning.Provider
            value={{
                activateWarning,
                action,
                setAction
            }}
        >
            <Warning active={action} message={message} type={type && type} />
            {children}
        </ReactContextWarning.Provider>
    )
}


export function useWarning() {
    const { activateWarning, action, setAction } = useContext(ReactContextWarning)
    return { activateWarning, action, setAction }
}