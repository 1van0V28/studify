import { TemplateInfoFull } from '@/app/types'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import styles from '@/app/styles/styles_widgets/Template.module.css'


const getTemplateStyle = function(templateId: string, currentTemplateId: string) {
    return (templateId === currentTemplateId ? styles.container_chosen : styles.container)
}


export function Template(props: {
    templateInfo: TemplateInfoFull,
    currentTemplateId: string,
    changeTemplateInfo: (templateInfo: TemplateInfoFull) => void,
    openTemplateInfo: (templateInfo: TemplateInfoFull) => void
}) {
    const templateClick = function() {
        props.changeTemplateInfo(props.templateInfo)
    }

    const templateChangeClick = function() {
        props.openTemplateInfo(props.templateInfo)
    }

    const templateStyle = getTemplateStyle(props.templateInfo.id, props.currentTemplateId)

    return (
        <div className={templateStyle} onClick={templateClick}>
            <div>
                <span className={styles.text}>{props.templateInfo.name}</span>
                <span className={styles.changer} onClick={templateChangeClick}>изменить</span>
            </div>
                <DeleteOutlineIcon className={styles.icon}/>
        </div>
    )
}