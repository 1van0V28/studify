import { SwitchButton } from '@/shared/SwitchButton'
import { WeekInfo } from '@/shared/WeekInfo'


export function WeekNavigator() {
    return (
        <header>
            <SwitchButton />
            <WeekInfo />
            <SwitchButton />
        </header>
    )
}