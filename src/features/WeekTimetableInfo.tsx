import { DayInfo } from '@/shared/DayInfo'
import { Event } from '@/widgets/Event'
import { AddEventButton } from '@/shared/AddEventButton'
import styles from '@/features/styles/WeekTimetableInfo.module.css'


export function WeekTimetableInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.timetable}>
                <div className={styles.container_dayinfo}>
                    <DayInfo />
                </div>
                <div className={styles.container_dayinfo}>
                    <DayInfo />
                </div>
                <div className={styles.container_dayinfo}>
                    <DayInfo />
                </div>
                <div className={styles.container_dayinfo}>
                    <DayInfo />
                </div>
                <div className={styles.container_dayinfo}>
                    <DayInfo />
                </div>
                <div className={styles.container_dayinfo}>
                    <DayInfo />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <AddEventButton/>
                </div>
                <div className={styles.container_event}>
                    <AddEventButton />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <AddEventButton />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
                <div className={styles.container_event}>
                    <Event />
                </div>
            </div>
        </div>
    )
}