import { FiltersInfo } from '@/app/types'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { Filters } from './Filters'
import { TemplatesCatalog } from './TemplatesCatalog'
import { WeekInfo } from '@/shared/WeekInfo'
import { ChangesClearButton } from '@/shared/ChangesClearButton'
import { ChangesSaveButton } from '@/shared/ChangesSaveButton'
import styles from '@/app/styles/styles_features/WeekNavigator.module.css'



export function WeekNavigator(props: {
    currentDate: Date,
    currentFilters: FiltersInfo,
    changeFilters: (filters: FiltersInfo) => void,
    switchWeek: (switcher: 'prev' | 'next') => void
}) {
    const switchPrevWeek = function() {
        props.switchWeek('prev')
    }
    
    const switchNextWeek = function() {
        props.switchWeek('next')
    }

    return (
        <header className={styles.container}>
            <div className={styles.container_block}>
                <Filters 
                currentFilters={props.currentFilters}
                changeFilters={props.changeFilters} />
                <TemplatesCatalog />
            </div>
            <div className={styles.container_info}>
                <button className={styles.button} onClick={switchPrevWeek}>
                    <ArrowBackOutlinedIcon className={styles.button_icon}/>
                </button>
                <WeekInfo currentDate={props.currentDate} />
                <button className={styles.button} onClick={switchNextWeek}>
                    <ArrowForwardOutlinedIcon className={styles.button_icon}/>
                </button>
            </div>
            <div className={styles.container_block}>
                <ChangesClearButton />
                <ChangesSaveButton />
            </div>
        </header>
    )
}