import { useState, useRef } from 'react'
import { EventInfoFull } from '@/app/types'
import { initEventInfo } from '@/app/initData'
import { Navigator } from '@/entities/Navigator'
import { Timetable } from '@/entities/Timetable'
import { EventInfo } from '@/widgets/EventInfo'


export function HomePage() {
    const [eventInfoState, setEventInfoState] = useState<EventInfoFull>(initEventInfo)
    const eventInfoRef = useRef<HTMLDialogElement>(null)

    const openEventInfo = function(eventInfo: EventInfoFull) {
        setEventInfoState(eventInfo)
        eventInfoRef.current?.show()
    }

    const closeEventInfo = function() {
        setEventInfoState({...eventInfoState})
        eventInfoRef.current?.close()
    }

    const changeEventInfo = function(eventInfo: EventInfoFull) {
        setEventInfoState(eventInfo)
    }

    return (
        <>
            <Navigator />
            <Timetable openEventInfo={openEventInfo} />
            <EventInfo 
            eventInfoRef={eventInfoRef} 
            eventInfo={eventInfoState}
            changeEventInfo={changeEventInfo} 
            closeEventInfo={closeEventInfo} />
        </>
    )
}