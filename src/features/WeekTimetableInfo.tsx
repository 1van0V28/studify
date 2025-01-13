import { FiltersInfo, EventInfoFull } from '@/app/types'
import { weekdaysMap } from '@/app/initData'
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


export function WeekTimetableInfo(props: {
    currentDate?: Date,
    currentFilters: FiltersInfo,
    openEventInfo: (eventInfo: EventInfoFull) => void
}) {
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

    const getDayInfoFullList = function() {
        const startDate = getStartDate(props.currentDate!) // функция будет вызвана только при наличии currentDate
        const dayInfoFullList = []
        for (let i = 0; i < 6; i++) { 
            const key = crypto.randomUUID()
            const dayInfoDate = new Date(startDate.getTime())
            dayInfoDate.setDate(dayInfoDate.getDate() + i)
            const numberLessons = Object.keys(testWeekTableData[String(i + 1)]).length
            dayInfoFullList.push(
                <div key={key} className={styles.container_dayinfo}>
                    <DayInfo date={dayInfoDate} numberLessons={numberLessons}/>
                </div>
            )
        }

        return dayInfoFullList
    }

    const getDayInfoList = function() {
        const dayInfoList = []
        for (let i = 1; i < 7; i++) {
            const dayInfoKey = crypto.randomUUID()
            const dayInfoDate = weekdaysMap[String(i)]
            const numberLessons = Object.keys(testWeekTableData[String(i)]).length
            dayInfoList.push(
                <div key={dayInfoKey} className={styles.container_dayinfo}>
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
                            <Event 
                            eventInfo={testWeekTableData[day][String(i)]}
                            currentFilters={props.currentFilters} 
                            openEventInfo={props.openEventInfo} />
                        </div>
                    )
                } else {
                    eventList.push(
                        <div key={eventKey} className={styles.container_event}>
                            <EventClear 
                            eventInfo={{week: '1', day: day, order: String(i)}} 
                            openEventInfo={props.openEventInfo} />
                        </div>
                    )
                }
            }
        }

        return eventList
    }

    const eventOrderList = getEventOrderList()
    const dayInfoList = props.currentDate ? getDayInfoFullList() : getDayInfoList()
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