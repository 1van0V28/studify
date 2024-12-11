import { DayInfo } from '@/shared/DayInfo'
import { Event } from '@/widgets/Event'
import styles from '@/app/styles/styles_widgets/TodayTimetable.module.css'


export function TodayTimetable(props: {todayDate: Date}) {
    return (
        <section className={styles.container}>
            <header className={styles.container_dayinfo}>
                <h2>Сегодня</h2>
                <DayInfo date={props.todayDate}/>
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