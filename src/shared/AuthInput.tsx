import { ChangeEvent } from 'react'
import styles from '@/app/styles/styles_shared/AuthInput.module.css'


interface HTMLProps {
    type: string,
    name: string,
    id: string,
}


const getStyles = function(error: string, inputValue: string) {
    if (!inputValue) {
        return styles.input
    } else if (!error && inputValue) {
        return styles.input_valid
    } else {
        return styles.input_error
    }
}


export function AuthInput(props: {
    htmlProps: HTMLProps
    error: string,
    inputValue: string, 
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
    const inputStyle = getStyles(props.error, props.inputValue)

    return (
        <input className={inputStyle}
        {...props.htmlProps}
        onChange={props.handleChange}
        required>
        </input>
    )
}