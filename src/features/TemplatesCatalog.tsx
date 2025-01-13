import { useState } from 'react'
import { StatesWindow } from '@/app/types'
import { testTemplatesData } from '@/app/testData'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { TemplateCard } from '@/widgets/TemplateCard'
import styles from '@/app/styles/styles_features/TemplatesCatalog.module.css'


const getTemplatesCatalogStyle = function(windowState: StatesWindow) {
    if (windowState === 'close') {
        return {
            icon: styles.icon_close,
            window: styles.container_close,
        }
    } else {
        return {
            icon: styles.icon_show,
            window: styles.container_show,
        }
    }
}


export function TemplatesCatalog() {
    const [windowState, setWindowState] = useState<StatesWindow>('close')

    const templateClick = function() {
        if (windowState === 'close') {
            setWindowState('show')
        } else {
            setWindowState('close')
        }
    }

    const getTemplateCardList = function() {
        const templateCardList = []
        for (let template in testTemplatesData) {
            const templateKey = crypto.randomUUID()
            templateCardList.push(
                <TemplateCard key={templateKey} templateInfo={testTemplatesData[template]}/>
            )
        }

        return templateCardList
    }

    const templateCardList = getTemplateCardList()
    const templatesCatalogStyle = getTemplatesCatalogStyle(windowState)

    return (
        <div>
            <div className={styles.templates} onClick={templateClick}>
                <h3>Шаблоны</h3>
                <ArrowDropDownIcon className={templatesCatalogStyle.icon} />
            </div>
            <ul className={templatesCatalogStyle.window}>
                {templateCardList}
            </ul>
        </div>
    )
}