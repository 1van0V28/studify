import { WeekNavigator } from '@/features/WeekNavigator'
import { WeekTimetableInfo } from '@/features/WeekTimetableInfo'


export function WeekTimetable() {
    return (
        <section>
            <WeekNavigator />
            <WeekTimetableInfo />
        </section>
    )
}