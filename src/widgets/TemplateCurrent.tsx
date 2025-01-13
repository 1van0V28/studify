import { useState } from 'react'
import { EventInfoFull, FiltersInfo } from '@/app/types'
import { initEventCategories } from '@/app/initData'
import { TemplateHeader } from '@/features/TemplateHeader'
import { WeekTimetableInfo } from '@/features/WeekTimetableInfo'
import styles from '@/app/styles/styles_widgets/TemplateCurrent.module.css'


export function TemplateCurrent(props: {
    currentTemplateName: string,
    openEventInfo: (event: EventInfoFull) => void
}) {
    const [filtersState, setFiltersState] = useState(initEventCategories)

    const changeFilters = function(filters: FiltersInfo) {
        setFiltersState(filters)
    }

    return (
        <section className={styles.container}>
            <TemplateHeader
            currentTemplateName={props.currentTemplateName}
            currentFilters={filtersState}
            changeFilters={changeFilters} />
            <WeekTimetableInfo 
            openEventInfo={props.openEventInfo} 
            currentFilters={filtersState}/> 
        </section>
    )
}