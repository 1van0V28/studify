import { Dispatch } from 'react'
import { TimetableWeekAction, FiltersInfo } from '@/app/types'
import { Filters } from './Filters'
import { TemplatesCatalog } from './TemplatesCatalog'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { WeekInfo } from '@/shared/WeekInfo'
import { ChangesClearButton } from '@/shared/ChangesClearButton'
import { ChangesSaveButton } from '@/shared/ChangesSaveButton'
import styles from '@/app/styles/styles_features/WeekNavigator.module.css'


export function WeekNavigator(props: {
    shift: number,
    dispatch: Dispatch<TimetableWeekAction>,
    currentFilters: FiltersInfo,
    switchWeek: (shift: number) => void
    changeFilters: (filters: FiltersInfo) => void,
}) {
    const switchPrevWeek = function() {
        props.switchWeek(-1)
    }
    
    const switchNextWeek = function() {
        props.switchWeek(1)
    }

    const clearButtonClick = function() {
        props.dispatch({type: 'clear_timetable'})
    }

    const saveButtonClick = async function() {
        const response = await fetch('', {
            method: 'POST',
        })
        if (response.ok) {
            // сообщаем о завершении запроса
        }
    }

    return (
        <header className={styles.container}>
            <div className={styles.container_block}>
                <Filters 
                currentFilters={props.currentFilters}
                changeFilters={props.changeFilters} />
                <TemplatesCatalog dispatch={props.dispatch} />
            </div>
            <div className={styles.container_info}>
                <button className={styles.button} onClick={switchPrevWeek}>
                    <ArrowBackOutlinedIcon className={styles.button_icon }/>
                </button>
                <WeekInfo shift={props.shift} />
                <button className={styles.button} onClick={switchNextWeek}>
                    <ArrowForwardOutlinedIcon className={styles.button_icon} />
                </button>
            </div>
            <div className={styles.container_block}>
                <ChangesClearButton clearButtonClick={clearButtonClick} />
                <ChangesSaveButton saveButtonClick={saveButtonClick} />
            </div>
        </header>
    )
}