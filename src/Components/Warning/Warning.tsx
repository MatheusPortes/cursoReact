import { useWarning } from 'src/ReactContext/ContextWarning'
import { useEffect, useState } from 'react'
import './warning.css'

type WarningProps = {
    type?: 'success' | 'error' | 'info' | 'warning'
    message: string
    active: boolean | undefined
}

export function Warning( { message, type, active }: WarningProps ) {
    const [classAction, setClassAction] = useState(`${type ? `warning-${type} warning-alert` : `warning-alert`}`)

    const { setAction, action  } = useWarning()

    useEffect(() => {
        if( active === undefined) {
        } else if (active === false) {
            setClassAction(`${type ? `warning-${type} warning-alert active-end` : `warning-alert`}`)
        } else if (active === true) {
            setClassAction(`${type ? `warning-${type} warning-alert active-init` : `warning-alert`}`)
        }

    },[action])

    return (
        <div className={classAction}>
            <div>{message}</div>
            <div className='warning-exit' onClick={() => setAction(false)}>X</div>
        </div>
    )
}