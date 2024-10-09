import { TodayTimetable } from '@/widgets/TodayTimetable'
import { WeekTimetable } from '@/widgets/WeekTimetable'


export function Timetable() {
    return (
        <main>
            <TodayTimetable />
            <WeekTimetable />
        </main>
    )
}