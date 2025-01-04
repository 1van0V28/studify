import styles from '@/app/styles/styles_shared/WeekInfo.module.css'


const getWeeklyBoundaries = function(currentDate: Date) {
    const startDate = new Date(currentDate.getTime())
    const endDate = new Date(currentDate.getTime())

    const currentWeekday = currentDate.getDay()
    startDate.setDate(startDate.getDate() + 1 - currentWeekday) // получаем дату начала недели
    endDate.setDate(endDate.getDate() + 6 - currentWeekday) // получаем дату конца недели

    return {
        startDate: startDate,
        endDate: endDate,
    }
}


const formatWeeklyBoundaries = function(weeklyBoundaries: {startDate: Date, endDate: Date}) {
    const startDateMonth = weeklyBoundaries.startDate.getMonth()
    const endDateMonth = weeklyBoundaries.endDate.getMonth()
    const startDateDay = weeklyBoundaries.startDate.getDate()
    const endDateDay = weeklyBoundaries.endDate.getDate()

    if (startDateMonth === endDateMonth) {
        const month = weeklyBoundaries.startDate.toLocaleDateString('ru-RU', {month: 'short'})

        return `${startDateDay}-${endDateDay} ${month}`
    }

    const startMonth = weeklyBoundaries.startDate.toLocaleDateString('ru-RU', {month: 'short'})
    const endMonth = weeklyBoundaries.endDate.toLocaleDateString('ru-RU', {month: 'short'})

    return `${startDateDay} ${startMonth}-${endDateDay} ${endMonth}`
}


export function WeekInfo(props: {currentDate: Date}) {
    const weeklyBoundaries = getWeeklyBoundaries(props.currentDate)
    const formattedDate = formatWeeklyBoundaries(weeklyBoundaries)
    
    return (
        <div className={styles.container}>
            <h1>{formattedDate}</h1>
            <p className={styles.parity}>четная</p>
        </div> 
    )
}