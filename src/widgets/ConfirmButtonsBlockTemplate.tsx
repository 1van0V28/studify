import { Dispatch } from 'react'
import { TemplateInfoFull, TemplatesAction } from '@/app/types'
import { AuthButton } from '@/shared/AuthButton'
import styles from '@/app/styles/styles_widgets/ConfirmButtonsBlockTemplate.module.css'


export function ConfirmButtonsBlockTemplate(props: {
    formStatus: 'fulfilled' | 'clear',
    templateInfo: TemplateInfoFull,
    dispatch: Dispatch<TemplatesAction>
}) {
    const deleteButtonClick = async function() {
        const response = await fetch('', {
            method: 'POST',
        })

        if (response.ok) {
            props.dispatch({type: 'delete_template', templateInfo: props.templateInfo})
        } else {
            throw Error()
        }
    }

    const confirmButtonClick = async function() {
        fetch(`${props.templateInfo.id ?? ''}`)
            .then((response) => response.json())
            .then((templateInfo: TemplateInfoFull) => {
                props.dispatch({type: 'save_template', templateInfo: templateInfo})
            })
            .catch((error) => {console.log(error)})

    }
    return (
        <div className={styles.container_submit}>
            <div className={styles.container_submit_button}>
                <input className={styles.delete} 
                type='button' 
                value='Удалить' 
                onClick={deleteButtonClick}>
                </input>
            </div>
            <div className={styles.container_submit_button}>
                <AuthButton
                htmlAttributes={{
                    type: 'button',
                    value: 'Сохранить',
                }} 
                formStatus={props.formStatus}
                confirmChanges={confirmButtonClick} />
            </div>
        </div>
    )
}