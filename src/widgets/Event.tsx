import { EventInfoFull } from '@/app/types'
import { orderTimeMap } from '@/app/initData'
import styles from '@/app/styles/styles_widgets/Event.module.css'


export function Event(props: {eventInfo: EventInfoFull, openEventInfo: (eventInfo: EventInfoFull) => void}) {
    const eventClick = function() {
        props.openEventInfo(props.eventInfo)
    }

    return (
        <div className={styles.container} onClick={eventClick}>
            <div>
                <h2>{props.eventInfo.room}</h2>
                <p>{props.eventInfo.type}</p>
            </div>
            <div className={styles.subject}>
                <h3>{props.eventInfo.subject}</h3>
            </div>
            <h4 className={styles.time}>{orderTimeMap[props.eventInfo.order]}</h4>
        </div>
    )
}