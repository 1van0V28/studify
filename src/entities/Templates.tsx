import { TemplateInfoFull, EventInfoFull } from '@/app/types'
import { TemplatesBoard } from '@/widgets/TemplatesBoard'
import { TemplateCurrent } from '@/widgets/TemplateCurrent'
import styles from '@/app/styles/styles_entities/Templates.module.css'


export function Templates(props: {
    currentTemplateInfo: TemplateInfoFull,
    changeTemplateInfo: (templateInfo: TemplateInfoFull) => void,
    openTemplateInfo: (templateInfo: TemplateInfoFull) => void
    openEventInfo: (eventInfo: EventInfoFull) => void
}) {
    return (
        <main className={styles.container}>
            <TemplatesBoard 
            currentTemplateId={props.currentTemplateInfo.id}
            changeTemplateInfo={props.changeTemplateInfo} 
            openTemplateInfo={props.openTemplateInfo} />
            <TemplateCurrent 
            currentTemplateName={props.currentTemplateInfo.name} 
            openEventInfo={props.openEventInfo} />
        </main>
    )
}