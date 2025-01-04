import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { WeekInfo } from '@/shared/WeekInfo'
import styles from '@/app/styles/styles_features/WeekNavigator.module.css'


export function WeekNavigator(props: {currentDate: Date, switchWeek: (switcher: 'prev' | 'next') => void}) {
    const switchPrevWeek = function() {
        props.switchWeek('prev')
    }
    
    const switchNextWeek = function() {
        props.switchWeek('next')
    }

    return (
        <header className={styles.container}>
            <button className={styles.button} onClick={switchPrevWeek}>
                <ArrowBackOutlinedIcon className={styles.button_icon}/>
            </button>
            <WeekInfo currentDate={props.currentDate} />
            <button className={styles.button} onClick={switchNextWeek}>
                <ArrowForwardOutlinedIcon className={styles.button_icon}/>
            </button>
        </header>
    )
}