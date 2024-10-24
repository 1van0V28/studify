import { DayInfo } from '@/shared/DayInfo'
import { Event } from '@/widgets/Event'
import { AddEventButton } from '@/shared/AddEventButton'
import styles from '@/features/styles/WeekTimetableInfo.module.css'


const getStartDate = function(currentDate: Date) {
    const startDate = new Date(currentDate.getTime())
    startDate.setDate(startDate.getDate() + 1 - startDate.getDay())

    return startDate
}


export function WeekTimetableInfo(props: {currentDate: Date}) {
    const startDate = getStartDate(props.currentDate)

    const dayInfoList = []
    for (let i = 0; i < 6; i++) { // формирование списка DayInfo
        const key = crypto.randomUUID()
        const dayInfoDate = new Date(startDate.getTime())
        dayInfoDate.setDate(dayInfoDate.getDate() + i)

        dayInfoList.push(
            <div key={key} className={styles.container_dayinfo}>
                <DayInfo date={dayInfoDate}/>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.timetable}>
                {dayInfoList}
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