import { DayInfo } from '@/shared/DayInfo'
import { Event } from '@/widgets/Event'
import { AddEventButton } from '@/shared/AddEventButton'


export function WeekTimetableInfo() {
    return (
        <div>
            <DayInfo />
            <DayInfo />
            <DayInfo />
            <Event />
            <Event />
            <Event />
            <AddEventButton />
            <AddEventButton />
            <AddEventButton  />
        </div>
    )
}