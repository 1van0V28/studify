import { TodayTimetable } from '@/widgets/TodayTimetable'
import { WeekTimetable } from '@/widgets/WeekTimetable'
import styles from '@/entities/styles/Timetable.module.css'


export function Timetable() {
    return (
        <main className={styles.container}>
            <TodayTimetable />
            <WeekTimetable />
        </main>
    )
}