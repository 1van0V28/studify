import { TodayTimetable } from '@/widgets/TodayTimetable'
import { WeekTimetable } from '@/widgets/WeekTimetable'
import styles from '@/entities/styles/Timetable.module.css'


const todayDate = new Date()


export function Timetable() {
    return (
        <main className={styles.container}>
            <TodayTimetable todayDate={todayDate} />
            <WeekTimetable todayDate={todayDate} />
        </main>
    )
}