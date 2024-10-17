import { SwitchButton } from '@/shared/SwitchButton'
import { WeekInfo } from '@/shared/WeekInfo'
import styles from '@/features/styles/WeekNavigator.module.css'


export function WeekNavigator() {
    return (
        <header className={styles.container}>
            <SwitchButton />
            <WeekInfo />
            <SwitchButton />
        </header>
    )
}