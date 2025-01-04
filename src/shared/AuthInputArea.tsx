import { ReactNode } from 'react'
import styles from '@/app/styles/styles_shared/AuthInputArea.module.css'


const getStyles = function(error: string, inputValue: string) {
    if (!inputValue) {
        return styles.label
    } else if (!error && inputValue) {
        return styles.label_valid
    } else {
        return styles.label_error
    }
}


export function AuthInputArea(props: {
    id: string
    labelName: string,
    error: string,
    inputValue: string,
    children: ReactNode
}) {
    const labelStyle = getStyles(props.error, props.inputValue)

    return (
        <div className={styles.container}>
            <div className={styles.container_info}>
                <label className={labelStyle} htmlFor={props.id}>{props.labelName}</label>
                <span className={styles.error}>{props.error}</span>
            </div>
            {props.children}
        </div>
    )
}