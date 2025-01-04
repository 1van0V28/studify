import { EventInfoFull } from '@/app/types'
import { testWeekTableData } from '@/app/testData'
import { DayInfo } from '@/shared/DayInfo'
import { Event } from '@/widgets/Event'
import { EventClear } from '@/widgets/EventClear'
import styles from '@/app/styles/styles_features/WeekTimetableInfo.module.css'


const getStartDate = function(currentDate: Date) {
    const startDate = new Date(currentDate.getTime())
    startDate.setDate(startDate.getDate() + 1 - startDate.getDay())

    return startDate
}


export function WeekTimetableInfo(props: {currentDate: Date, openEventInfo: (eventInfo: EventInfoFull) => void}) {
    const startDate = getStartDate(props.currentDate)

    const getEventOrderList = function() {
        const eventOrder = []
        for (let i = 1; i < 9; i++) {
            const key = crypto.randomUUID()
            eventOrder.push(
                <div key={key} className={styles.container_eventorder}>
                    {i}
                </div>
            )
        }

        return eventOrder
    }

    const getDayInfoList = function() {
        const dayInfoList = []
        for (let i = 0; i < 6; i++) { 
            const key = crypto.randomUUID()
            const dayInfoDate = new Date(startDate.getTime())
            dayInfoDate.setDate(dayInfoDate.getDate() + i)
            const numberLessons = Object.keys(testWeekTableData[String(dayInfoDate.getDay())]).length
            dayInfoList.push(
                <div key={key} className={styles.container_dayinfo}>
                    <DayInfo date={dayInfoDate} numberLessons={numberLessons}/>
                </div>
            )
        }

        return dayInfoList
    }

    const getEventList = function() {
        const eventList = []
        for (let day in testWeekTableData) {
            for (let i = 1; i < 9; i++) {
                const eventKey = crypto.randomUUID()
                if (testWeekTableData[day][String(i)]) {
                    eventList.push(
                        <div key={eventKey} className={styles.container_event}>
                            <Event eventInfo={testWeekTableData[day][String(i)]} openEventInfo={props.openEventInfo} />
                        </div>
                    )
                } else {
                    eventList.push(
                        <div key={eventKey} className={styles.container_event}>
                            <EventClear eventInfo={{week: '1', day: day, order: String(i)}} openEventInfo={props.openEventInfo} />
                        </div>
                    )
                }
            }
        }

        return eventList
    }

    const eventOrderList = getEventOrderList()
    const dayInfoList = getDayInfoList()
    const eventList = getEventList()
    
    return (
        <div className={styles.container}>
            <div className={styles.timetable_dayinfo}>
                {dayInfoList}   
            </div>
            <div className={styles.timetable_event}>
                {eventOrderList}
                {eventList}
            </div>
        </div>
    )
}