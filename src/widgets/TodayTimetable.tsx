import { DayInfo } from '@/shared/DayInfo'
import { Event } from '@/widgets/Event'
import styles from '@/widgets/styles/TodayTimetable.module.css'


export function TodayTimetable() {
    return (
        <section className={styles.container}>
            <header className={styles.container_dayinfo}>
                <h1>Сегодня</h1>
                <DayInfo />
            </header>
            <div className={styles.container_events}>
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </div>
        </section>
    )
}