import { Navigator } from '@/entities/Navigator'
import { Timetable } from '@/entities/Timetable'
import { EventInfo } from '@/widgets/EventInfo'

export function HomePage() {
    return (
        <>
            <Navigator />
            <Timetable />
            <EventInfo />
        </>
    )
}