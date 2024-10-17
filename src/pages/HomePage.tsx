import { Navigator } from '@/entities/Navigator'
import { Timetable } from '@/entities/Timetable'
import { EventInfo } from '@/entities/EventInfo'

export function HomePage() {
    return (
        <>
            <Navigator />
            <Timetable />
            <EventInfo />
        </>
    )
}