import { ChangeEvent } from 'react'
import styles from '@/app/styles/styles_shared/EventInfoInput.module.css'


interface HTMLAttributesEventInfoInput {
    name: 'room' | 'subject' | 'teacher',
    placeholder: string,
    value: string
}


export function EventInfoInput(props: {
    htmlAttrs: HTMLAttributesEventInfoInput,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <input className={styles.input} 
        type='text' 
        {...props.htmlAttrs}
        onChange={props.handleChange}>
        </input>
    )
}