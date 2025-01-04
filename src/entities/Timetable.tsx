import { useState } from 'react'
import { EventInfoFull } from '@/app/types'
import { testWeekTableData } from '@/app/testData'
import { TodayTimetable } from '@/widgets/TodayTimetable'
import { WeekTimetable } from '@/widgets/WeekTimetable'
import styles from '@/app/styles/styles_entities/Timetable.module.css'


export function Timetable(props: {openEventInfo: (eventInfo: EventInfoFull) => void}) {
    const [timetableState, setTimetableState] = useState(testWeekTableData)
    return ( // здесь стоит отправлять запрос на текущую неделю
        <main className={styles.container}>
            <TodayTimetable openEventInfo={props.openEventInfo} />
            <WeekTimetable openEventInfo={props.openEventInfo} currentTimetable={timetableState} />
        </main>
    )
}