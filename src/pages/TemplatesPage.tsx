import { useState, useRef } from 'react'
import { TemplateInfoFull, EventInfoFull } from '@/app/types'
import { initTemplateInfo, initEventInfo } from '@/app/initData'
import { Templates } from '@/entities/Templates'
import { TemplateInfo } from '@/widgets/TemplateInfo'
import { EventInfo } from '@/widgets/EventInfo'


export function TemplatesPage() {
    const [templateInfoState, setTemplateInfoState] = useState<TemplateInfoFull>(initTemplateInfo)
    const [eventInfoState, setEventInfoState] = useState<EventInfoFull>(initEventInfo)
    const templateInfoRef = useRef<HTMLDialogElement>(null)
    const eventInfoRef = useRef<HTMLDialogElement>(null)

    const openTemplateInfo = function(templateInfo: TemplateInfoFull) {
        setTemplateInfoState(templateInfo)
        templateInfoRef.current?.show()
    }

    const openEventInfo = function(eventInfo: EventInfoFull) {
        setEventInfoState(eventInfo)
        eventInfoRef.current?.show()
    }

    const closeTemplateInfo = function() {
        templateInfoRef.current?.close()
    }

    const closeEventInfo = function() {
        eventInfoRef.current?.close()
    }

    const changeTemplateInfo = function(templateInfo: TemplateInfoFull) {
        setTemplateInfoState(templateInfo)
    }

    const changeEventInfo = function(eventInfo: EventInfoFull) {
        setEventInfoState(eventInfo)
    }

    return (
        <>
            <Templates
            currentTemplateInfo={templateInfoState} 
            changeTemplateInfo={changeTemplateInfo}
            openTemplateInfo={openTemplateInfo} 
            openEventInfo={openEventInfo}/>
            <TemplateInfo
            templateInfoRef={templateInfoRef}
            templateInfo={templateInfoState}
            changeTemplateInfo={changeTemplateInfo}
            closeTemplateInfo={closeTemplateInfo} />
            <EventInfo
            eventInfoRef={eventInfoRef}
            eventInfo={eventInfoState}
            changeEventInfo={changeEventInfo}
            closeEventInfo={closeEventInfo} />
        </>
    )
}