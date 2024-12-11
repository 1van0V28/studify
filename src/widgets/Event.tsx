import { useState } from 'react'
import styles from '@/app/styles/styles_widgets/Event.module.css'


export function Event(props: {changeEventInfo: (eventInfo: {}) => void}) {
    const [eventState, setEventState] = useState('')
    
    const eventClick = function() {
        props.changeEventInfo({})
    }

    return (eventState === 'clear'
    ? 
    <div className={styles.container_clear} onClick={eventClick}>
        <p>Можно чиллить</p>
        <h2>5:00-22:00</h2>
    </div>
    :
    <div className={styles.container_fulfilled} onClick={eventClick}>
        <div>
            <h2>D666</h2>
            <p>Практика</p>
        </div>
        <h3>Ебучий матанализ</h3>
        <p>5:00-22:00</p>
    </div>
    )
}