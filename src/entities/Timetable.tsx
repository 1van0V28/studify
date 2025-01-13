import { useState } from 'react'
import { EventInfoFull, FiltersInfo } from '@/app/types'
import { initEventCategories } from '@/app/initData'
import { testWeekTableData } from '@/app/testData'
import { TodayTimetable } from '@/widgets/TodayTimetable'
import { WeekTimetable } from '@/widgets/WeekTimetable'
import styles from '@/app/styles/styles_entities/Timetable.module.css'


export function Timetable(props: {openEventInfo: (eventInfo: EventInfoFull) => void}) {
    const [timetableState, setTimetableState] = useState(testWeekTableData)
    const [filtersState, setFiltersState] = useState(initEventCategories)

    const changeFilters = function(filters: FiltersInfo) {
        setFiltersState(filters)
    }

    return ( // здесь стоит отправлять запрос на текущую неделю
        <main className={styles.container}>
            <TodayTimetable
            currentFilters={filtersState}
            openEventInfo={props.openEventInfo} />
            <WeekTimetable
            currentTimetable={timetableState}
            currentFilters={filtersState}
            changeFilters={changeFilters}
            openEventInfo={props.openEventInfo} />
        </main>
    )
}