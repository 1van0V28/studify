const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
}


const getFormattedTodayDate = function(date: Date) {
    const formattedDate = date.toLocaleDateString('ru-RU', options)
    const todayDate = formattedDate[0].toUpperCase() + formattedDate.slice(1)

    return todayDate
}


export function DayInfo(props: {date: Date}) {
    const formattedDate = getFormattedTodayDate(props.date)

    return (
        <>
            <p>{formattedDate}</p>
            <p>6 пар</p>
        </>
    )
}