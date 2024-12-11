import { SwitchButton } from '@/shared/SwitchButton'
import { WeekInfo } from '@/shared/WeekInfo'
import styles from '@/app/styles/styles_features/WeekNavigator.module.css'


export function WeekNavigator(props: {currentDate: Date, switchWeek: (switcher: 'prev' | 'next') => void}) {
    return (
        <header className={styles.container}>
            <SwitchButton direction='prev' switchWeek={props.switchWeek}/>
            <WeekInfo currentDate={props.currentDate}/>
            <SwitchButton direction='next' switchWeek={props.switchWeek}/>
        </header>
    )
}