import { AuthButton } from '@/shared/AuthButton'
import styles from '@/app/styles/styles_widgets/ConfirmButtonsBlock.module.css'


export function ConfirmButtonsBlock(props: {formStatus: 'fulfilled' | 'clear'}) {
    return (
        <div className={styles.container_submit}>
            <div className={styles.container_submit_button}>
                <input className={styles.delete} type='button' value='Удалить'></input>
            </div>
            <div className={styles.container_submit_button}>
                <AuthButton
                htmlAttributes={{
                    value: 'Сохранить'
                }} 
                formStatus={props.formStatus} />
            </div>
        </div>
    )
}