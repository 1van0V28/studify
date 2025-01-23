import { useReducer, useState, useRef, useEffect } from 'react'
import { 
    TimetableWeekState,
    TimetableWeekAction,
    TimetableTodayState, 
    TimetableTodayAction,
    EventInfoFull, 
    TimetableWeek, 
    Weekdays
} from '@/app/types'
import { initTimetableWeek, initTimetableWeekState, initTimetableTodayState, initEventInfoState } from '@/app/initData'
import { Timetable } from '@/entities/Timetable'
import { EventInfo } from '@/widgets/EventInfo'


const timetableWeekReducer = function(timetableWeekState: TimetableWeekState, action: TimetableWeekAction) {
    if (action.type === 'delete_event') {
        const day = action.eventInfo!.day
        const order = action.eventInfo!.order
        const newTimetableWeekState = {...timetableWeekState}

        delete newTimetableWeekState.timetable[day][order]

        return newTimetableWeekState
    } else if (action.type === 'save_event') {
        const day = action.eventInfo!.day
        const order = action.eventInfo!.order
        const newTimetableWeekState = {...timetableWeekState}

        newTimetableWeekState.timetable[day][order] = {...action.eventInfo!}

        return newTimetableWeekState
    } else if (action.type === 'apply_template') { // нужно заменить даты или использовать применение через запрос
        return {...timetableWeekState, timetable: {...action.timetable!}}
    } else if (action.type === 'clear_timetable') {
        return {...timetableWeekState, timetable: {...initTimetableWeek}}
    } else if (action.type === 'switch_week') {
        return {...timetableWeekState, shift: timetableWeekState.shift + action.shift!}
    } else if (action.type === 'switch_week_today') {
        return {...timetableWeekState, shift: 0}
    } else if (action.type === 'fetch_timetable') {
        return {...timetableWeekState, isLoading: true}
    } else if (action.type === 'apply_timetable') {
        return {...timetableWeekState,
            timetable: {...action.timetable!},
            isLoading: false
        }
    } else {
        throw Error(`Uknown action: ${action.type}`)
    }
}


const timetableTodayReducer = function(timetableTodayState: TimetableTodayState, action: TimetableTodayAction) {
    if (action.type === 'delete_event') {
        const newTimetableTodayState = {...timetableTodayState}
        
        delete newTimetableTodayState.timetable[action.eventInfo!.order]

        return newTimetableTodayState
    } else if (action.type === 'save_event') {
        return {...timetableTodayState, [action.eventInfo!.order]: action.eventInfo}
    } else if (action.type === 'apply_timetable') {
        return {...timetableTodayState, timetable: action.timetable!}
    } else {
        throw Error(`Uknown action: ${action.type}`)
    }
}


export function HomePage() {
    const [timetableWeekState, timetableWeekDispatch] = useReducer(timetableWeekReducer, initTimetableWeekState)
    const [timetableTodayState, timetableTodayDispatch] = useReducer(timetableTodayReducer, initTimetableTodayState)
    const [eventInfoState, setEventInfoState] = useState(initEventInfoState)
    const eventWeekInfoRef = useRef<HTMLDialogElement>(null)

    const openEventInfo = function(eventInfo: EventInfoFull, eventType: 'event' | 'event_today') {
        if (eventType === 'event') {
            setEventInfoState({
                ...eventInfoState, 
                eventInfo: eventInfo,
                impactObjectName: 'event',
                impactObjectDispatch: timetableWeekDispatch,
            })
        } else if (eventType === 'event_today') {
            setEventInfoState({
                ...eventInfoState, 
                eventInfo: eventInfo,
                impactObjectName: 'event_today',
                impactObjectDispatch: timetableTodayDispatch,
            })
        }
        
        eventWeekInfoRef.current?.show()
    }

    const closeEventInfo = function() {
        eventWeekInfoRef.current?.close()
    }

    const changeEventInfo = function(eventInfo: EventInfoFull) {
        setEventInfoState({...eventInfoState, eventInfo: eventInfo})
    }

    // useEffect(() => {
    //     let ignore = false
    //     timetableWeekDispatch({type: 'fetch_timetable'})
    //     fetch('')
    //         .then((response) => response.json())
    //         .then((result: TimetableWeek) => {
    //             if (!ignore) {
    //                 timetableWeekDispatch({type: 'apply_timetable', timetable: result})
    //             }
    //         })
    //         .catch((error) => {console.log(error)})

    //     return () => {
    //         ignore = true
    //     }
    // }, [timetableWeekState.shift])


    // useEffect(() => {
    //     fetch('')
    //         .then((response) => response.json())
    //         .then((result: TimetableWeek) => {
    //             const todayDay = new Date().toLocaleDateString('en-US', {weekday: 'long'}) as Weekdays
    //             timetableTodayDispatch({type: 'apply_timetable', timetable: result[todayDay]})
    //         })
    //         .catch((error) => console.log(error))
    // }, [])

    return (
        <>
            <Timetable 
            timetableWeekState={timetableWeekState}
            timetableTodayState={timetableTodayState}
            timetableWeekDispatch={timetableWeekDispatch} 
            openEventInfo={openEventInfo} />
            <EventInfo 
            eventInfoRef={eventWeekInfoRef} 
            eventInfoState={eventInfoState}
            changeEventInfo={changeEventInfo}
            closeEventInfo={closeEventInfo} />
        </>
    )
}