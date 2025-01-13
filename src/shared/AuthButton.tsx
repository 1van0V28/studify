import styles from '@/app/styles/styles_shared/AuthButton.module.css'


export interface HTMLAuthButtonAttributes {
    value: string,
    form?: string,
}


export function AuthButton(props: {
    htmlAttributes?: HTMLAuthButtonAttributes, 
    formStatus: 'fulfilled' | 'clear'
}) {
    return (
        <>
            {props.formStatus === 'fulfilled'
            ?
            <input className={styles.button_active} 
            type='submit' 
            {...props.htmlAttributes}>
            </input>
            :
            <input className={styles.button} 
            type='submit' 
            {...props.htmlAttributes}
            disabled>
            </input>
            }
        </> 
    )
}