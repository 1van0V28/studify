import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { NavigatorButton } from '@/shared/NavigatorButton'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import styles from '@/app/styles/styles_entities/Navigator.module.css'


export function Navigator() {
    return (
        <aside className={styles.container}>
            <div className={styles.container_account}>
                <AccountCircleIcon className={styles.button_acc}/>
            </div>
            <nav className={styles.container_navigator}>
                <NavigatorButton>
                    <CalendarMonthIcon className={styles.button_nav} />
                </NavigatorButton>

                <NavigatorButton>
                    <CalendarViewMonthIcon className={styles.button_nav} />
                </NavigatorButton>
                
                <NavigatorButton>
                    <PeopleAltOutlinedIcon className={styles.button_nav} />
                </NavigatorButton>
            </nav>
        </aside>
    )
}