import { useId, ChangeEvent } from 'react'
import styles from '@/app/styles/styles_shared/LoginInput.module.css'


export function LoginInput(props: {
    labelName: string, 
    type: string, 
    name: string, 
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
    const inputId = useId()

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={inputId}>{props.labelName}</label>
            <input className={styles.input} 
            type={props.type} 
            name={props.name} 
            id={inputId}
            onChange={props.handleChange}>
            </input>
        </div>
    )
}