import { EventInfoFull } from '@/app/types'
import { testTodayTableData } from '@/app/testData'
import { DayInfo } from '@/shared/DayInfo'
import { Event } from '@/widgets/Event'
import { EventClear } from '@/widgets/EventClear'
import styles from '@/app/styles/styles_widgets/TodayTimetable.module.css'


export function TodayTimetable(props: {
    openEventInfo: (eventInfo: EventInfoFull) => void
}) {
    const todayDate = new Date()
    const numberLessons = Object.keys(testTodayTableData).length

    const getEventList = function() {
        const todayDay = String(todayDate.getDay())
        const eventList = []
        for (let i = 1; i < 9; i++) {
            const eventKey = crypto.randomUUID()
            if (testTodayTableData[String(i)]) {
                eventList.push(
                    <Event key={eventKey} eventInfo={testTodayTableData[String(i)]} openEventInfo={props.openEventInfo} />
                )
            } else {
                eventList.push(
                    <EventClear key={eventKey} eventInfo={{week: '1', day: todayDay, order: String(i)}} openEventInfo={props.openEventInfo} />
                )
            }
        }

        return eventList
    }

    const eventList = getEventList()

    return (
        <section className={styles.container}>
            <header className={styles.container_dayinfo}>
                <h2>Сегодня</h2>
                <DayInfo date={todayDate} numberLessons={numberLessons} />
            </header>
            <div className={styles.container_events}>
                {eventList}
            </div>
        </section>
    )
}