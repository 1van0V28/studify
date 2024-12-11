import { TodayTimetable } from '@/widgets/TodayTimetable'
import { WeekTimetable } from '@/widgets/WeekTimetable'
import styles from '@/app/styles/styles_entities/Timetable.module.css'


const todayDate = new Date()


export function Timetable(props: {changeEventInfo: (eventInfo: {}) => void}) {
    return (
        <main className={styles.container}>
            <TodayTimetable todayDate={todayDate} />
            <WeekTimetable todayDate={todayDate} changeEventInfo={props.changeEventInfo}/>
        </main>
    )
}