import styles from '@/app/styles/styles_shared/AuthButton.module.css'


export function AuthButton(props: {
    name: string, 
    form: string, 
    formStatus: 'fulfilled' | 'clear'
}) {
    return (
        <>
            {props.formStatus === 'fulfilled'
            ?
            <input className={styles.button_active} 
            type='submit' 
            value={props.name}
            form={props.form}>
            </input>
            :
            <input className={styles.button} 
            type='submit' 
            value={props.name}
            form={props.form}
            disabled>
            </input>
            }
        </> 
    )
}