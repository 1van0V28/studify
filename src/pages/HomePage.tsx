import { useState } from 'react'
import { Navigator } from '@/entities/Navigator'
import { Timetable } from '@/entities/Timetable'
import { EventInfo } from '@/widgets/EventInfo'


type T = {
    display: 'hidden' | 'visible',
    eventInfo: {},
}


export function HomePage() {
    const [eventInfoState, setEventInfoState] = useState<T>({display: 'visible', eventInfo: {}})
    
    const changeEventInfo = function(eventInfo: {}) {
        setEventInfoState({display: 'visible', eventInfo: eventInfo})
        console.log(eventInfoState.display)
    }

    const closeEventInfo = function() {
        setEventInfoState({display: 'hidden', eventInfo: eventInfoState.eventInfo})
        console.log(eventInfoState.display)
    }

    return (
        <>
            <Navigator />
            <Timetable changeEventInfo={changeEventInfo} />
            <EventInfo eventInfoState={eventInfoState} closeEventInfo={closeEventInfo}/>
        </>
    )
}