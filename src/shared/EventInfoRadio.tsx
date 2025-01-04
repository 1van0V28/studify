import { ChangeEvent, useId } from 'react'
import styles from '@/app/styles/styles_shared/EventInfoRadio.module.css'


export function EventInfoRadio(props: {
    checkedRadio: string, 
    value: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}) {
    const radioId = useId()

    return (
        <div className={styles.container}>
            <input className={styles.input} 
            type='radio' 
            name='type' 
            id={radioId}
            value={props.value}
            checked={props.value === props.checkedRadio}
            onChange={props.handleChange}>
            </input>
            <label className={styles.label} htmlFor={radioId}>{props.value}</label>
        </div>
    )
}