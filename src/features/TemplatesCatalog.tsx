import { useState, Dispatch, useEffect } from 'react'
import { TimetableWeekAction, Templates } from '@/app/types'
import { initTemplatesCatalogState } from '@/app/initData'
import { testTemplatesData } from '@/app/testData'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { TemplateCard } from '@/widgets/TemplateCard'
import { Loader } from '@/shared/Loader'
import styles from '@/app/styles/styles_features/TemplatesCatalog.module.css'


const getTemplatesCatalogStyle = function(isOpen: boolean) {
    if (isOpen) {
        return {
            icon: styles.icon_show,
            window: styles.container_show,
        }
    } else {
        return {
            icon: styles.icon_close,
            window: styles.container_close,
        }
    }
}


export function TemplatesCatalog(props: {dispatch: Dispatch<TimetableWeekAction>}) {
    const [templateCatalogState, setTemplateCatalogState] = useState(initTemplatesCatalogState)

    const templatesCatalogClick = function() {
        if (templateCatalogState.isOpen) {
            setTemplateCatalogState({...templateCatalogState, isOpen: false})
        } else {
            setTemplateCatalogState({...templateCatalogState, isOpen: true})
        }
    }

    const getTemplateCardList = function() {
        const templateCardList = []
        for (let template in templateCatalogState) {
            const templateKey = crypto.randomUUID()
            templateCardList.push(
                <TemplateCard 
                key={templateKey} 
                templateInfo={testTemplatesData[template]}
                dispatch={props.dispatch} />
            )
        }

        return templateCardList
    }

    useEffect(() => {
        fetch('')
            .then((response) => response.json())
            .then((templates: Templates) => {
                    setTemplateCatalogState({
                        ...templateCatalogState,
                        templates: templates,
                        isLoading: false,
                    })
            })
            .catch((error) => {console.log(error)})
    }, [])

    const templateCardList = getTemplateCardList()
    const templatesCatalogStyle = getTemplatesCatalogStyle(templateCatalogState.isOpen)

    return (
        <div>
            <div className={styles.templates} onClick={templatesCatalogClick}>
                <h3>Шаблоны</h3>
                <ArrowDropDownIcon className={templatesCatalogStyle.icon} />
            </div>
            <ul className={templatesCatalogStyle.window}>
                {true
                ?
                <div className={styles.container_loader}>
                    <Loader />
                </div>
                :
                templateCardList
                }
            </ul>
        </div>
    )
}