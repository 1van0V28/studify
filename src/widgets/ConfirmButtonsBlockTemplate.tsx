import { Dispatch } from 'react'
import { TemplateInfoFull, TemplatesAction } from '@/app/types'
import { DeleteButton } from '@/shared/DeleteButton'
import { AuthButton } from '@/shared/AuthButton'
import styles from '@/app/styles/styles_widgets/ConfirmButtonsBlockTemplate.module.css'


export function ConfirmButtonsBlockTemplate(props: {
    formStatus: 'fulfilled' | 'clear',
    templateInfo: TemplateInfoFull,
    dispatch: Dispatch<TemplatesAction>
}) {
    const deleteButtonClick = async function() {
        try {
            const response = await fetch(`http://localhost:8000/api/week-templates/${props.templateInfo.id}`, {
                method: 'DELETE',
            })
            if (response.ok) {
                props.dispatch({type: 'delete_template', templateInfo: props.templateInfo})
            } 
        } catch(error) {
            console.log('Ошибка удаления шаблона', error)
        }
    }

    const confirmButtonClick = async function() {
        fetch(`http://localhost:8000/api/week-templates/${props.templateInfo.id ?? ''}`, {
            method: props.templateInfo.id ? 'PATCH' : 'POST'
        })
            .then((response) => response.json())
            .then((templateInfo: TemplateInfoFull) => {
                props.dispatch({type: 'save_template', templateInfo: templateInfo})
            })
            .catch((error) => {console.log('Ошибка сохранения шаблона', error)})
    }

    return (
        <div className={styles.container_submit}>
            <div className={styles.container_submit_button}>
                <DeleteButton deleteElement={deleteButtonClick}/>
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