import { useState } from 'react'
import { WeekNavigator } from '@/features/WeekNavigator'
import { WeekTimetableInfo } from '@/features/WeekTimetableInfo'
import styles from '@/app/styles/styles_widgets/WeekTimetable.module.css'


export function WeekTimetable(props: {todayDate: Date, changeEventInfo: (eventInfo: {}) => void}) {
    const [timetableState, setTimetableState] = useState(props.todayDate) // в начале работы каждый раз будет устанавливаться текущая дата
    
    const switchWeek = function(switcher: 'prev' | 'next') { // в WeekNavigator мы отображаем и меняем состояние при переключении
        const newWeek = new Date(timetableState.getTime())
        if (switcher === 'prev') {
            newWeek.setDate(newWeek.getDate() - 7)
        } else {
            newWeek.setDate(newWeek.getDate() + 7)
        }
        setTimetableState(newWeek) // на будущее: можно переписать используя функцию-установщик состояния на основе предыдущего
    }
    
    return (
        <section className={styles.container}>
            <WeekNavigator currentDate={timetableState} switchWeek={switchWeek}/>
            <WeekTimetableInfo currentDate={timetableState} changeEventInfo={props.changeEventInfo}/>
        </section>
    )
}