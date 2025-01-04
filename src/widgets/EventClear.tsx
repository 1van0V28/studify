import { EventInfoBase, EventInfoFull } from '@/app/types'
import { orderTimeMap } from '@/app/initData'
import styles from '@/app/styles/styles_widgets/EventClear.module.css'


export function EventClear(props: {eventInfo: EventInfoBase, openEventInfo: (eventInfo: EventInfoFull) => void}) {
    const eventClick = function() {
        const initEventInfoFull: EventInfoFull = {
            ...props.eventInfo,
            room: '',
            subject: '',
            type: '',
        }
        props.openEventInfo(initEventInfoFull)
    }

    return (
        <div className={styles.container} onClick={eventClick}>
            <p>Можно чиллить</p>
            <h2>{orderTimeMap[props.eventInfo.order]}</h2>
            <p className={styles.add}>добавить</p>
        </div>
    )
}