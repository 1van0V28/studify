import { TemplateInfoFull } from '@/app/types'
import { testTemplatesData } from '@/app/testData'
import { AddTemplateButton } from '@/shared/AddTemplateButton'
import { Template } from './Template'
import styles from '@/app/styles/styles_widgets/TemplatesBoard.module.css'


export function TemplatesBoard(props: {
    currentTemplateId: string,
    changeTemplateInfo: (templateInfo: TemplateInfoFull) => void,
    openTemplateInfo: (templateInfo: TemplateInfoFull) => void
}) {
    const getTemplateList = function() {
        const templateList = []
        for (let template in testTemplatesData) {
            const key = crypto.randomUUID()
            templateList.push(
                <Template 
                key={key} 
                templateInfo={testTemplatesData[template]} 
                currentTemplateId={props.currentTemplateId}
                changeTemplateInfo={props.changeTemplateInfo}
                openTemplateInfo={props.openTemplateInfo} />
            )
        }

        return templateList
    }

    const templateList = getTemplateList()

    return (
        <section className={styles.container}>
            <header className={styles.container_header}>
                <h2>Ваши шаблоны</h2>
            </header>
            <div className={styles.container_templates}>
                <AddTemplateButton openTemplateInfo={props.openTemplateInfo}/>
                {templateList}
            </div>
        </section>
    )
}