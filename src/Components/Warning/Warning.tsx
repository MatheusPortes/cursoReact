import './warning.css'

type WarningProps = {
    type?: 'success' | 'error' | 'info' | 'warning'
    message: string
    active: boolean
}

export function Warning( { message, type, active }: WarningProps ) {
    return (
        <div className={active ? `warning-alert active-warning warning-${type}` : "warning-alert"}>
            {message}
        </div>
    )
}