import { Dispatch } from 'react'
import { TemplateInfoFull, TemplatesAction } from '@/app/types'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import styles from '@/app/styles/styles_widgets/Template.module.css'


const getTemplateStyle = function(
    templateId: string | undefined,
    currentTemplateId: string | undefined
) {
    return (templateId === currentTemplateId ? styles.container_chosen : styles.container)
}


export function Template(props: {
    templateInfo: TemplateInfoFull,
    currentTemplateId: string | undefined,
    dispatch: Dispatch<TemplatesAction>,
    openTemplateInfo: (templateInfo: TemplateInfoFull) => void
}) {
    const templateClick = function() {
        props.dispatch({type: 'change_template', templateInfo: props.templateInfo})
    }

    const templateChangeClick = function() {
        props.openTemplateInfo(props.templateInfo)
    }

    const deleteClick = async function() {
        const response = await fetch('', {
            method: 'DELETE',
        })

        if (response.ok) {
            props.dispatch({type: 'delete_template', templateInfo: props.templateInfo})
        }
    }

    const templateStyle = getTemplateStyle(props.templateInfo.id, props.currentTemplateId)

    return (
        <div className={templateStyle} onClick={templateClick}>
            <div>
                <span className={styles.text}>{props.templateInfo.name}</span>
                <span className={styles.changer} onClick={templateChangeClick}>изменить</span>
            </div>
                <DeleteOutlineIcon className={styles.icon} onClick={deleteClick} />
        </div>
    )
}