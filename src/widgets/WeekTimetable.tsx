import { useState } from 'react'
import { Timetable, FiltersInfo, EventInfoFull } from '@/app/types'
import { WeekNavigator } from '@/features/WeekNavigator'
import { WeekTimetableInfo } from '@/features/WeekTimetableInfo'
import styles from '@/app/styles/styles_widgets/WeekTimetable.module.css'


const initDate = new Date()


export function WeekTimetable(props: {
    currentTimetable: Timetable,
    currentFilters: FiltersInfo
    changeFilters: (filters: FiltersInfo) => void,
    openEventInfo: (eventInfo: EventInfoFull) => void
}) {
    const [timetableState, setTimetableState] = useState(initDate) // в начале работы каждый раз будет устанавливаться текущая дата
    
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
            <WeekNavigator 
            currentDate={timetableState} 
            currentFilters={props.currentFilters}
            changeFilters={props.changeFilters}
            switchWeek={switchWeek} />
            <WeekTimetableInfo 
            currentDate={timetableState}
            currentFilters={props.currentFilters} 
            openEventInfo={props.openEventInfo} />
        </section>
    )
}