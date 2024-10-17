import { WeekNavigator } from '@/features/WeekNavigator'
import { WeekTimetableInfo } from '@/features/WeekTimetableInfo'
import styles from '@/widgets/styles/WeekTimetable.module.css'


export function WeekTimetable() {
    return (
        <section className={styles.container}>
            <WeekNavigator />
            <WeekTimetableInfo />
        </section>
    )
}