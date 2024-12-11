import { EventInfoText } from '@/shared/EventInfoText'
import { EventCategoryButton } from '@/shared/EventCategoryButton'
import styles from '@/app/styles/styles_widgets/EventInfo.module.css'


export function EventInfo(props: {eventInfoState: {display: 'hidden' | 'visible', eventInfo: {}}, closeEventInfo: () => void}) {
    const dialogStyle = (props.eventInfoState.display === 'hidden' 
    ? 
    styles.container_hidden
    : 
    styles.container)

    return (
        <dialog className={dialogStyle}>
                <div className={styles.container_top}>
                    <EventInfoText />
                    <button className={styles.button} onClick={props.closeEventInfo}>X</button> {/*господу помолимся*/}
                </div>
                <EventInfoText />
                <div>
                    <label> {/*не забыть указать for и id для input*/}
                        <input type='radio' name='category'></input>
                        Практика
                    </label>
                    <label> {/*не забыть указать for и id для input*/}
                        <input type='radio' name='category'></input>
                        Лекция
                    </label>
                </div>
                <div>
                    <h3>5:00-22:00 (-1 пара)</h3>
                    <p>Пятница 11 Окт.</p>
                </div>
                <EventInfoText />
                <div>
                    <EventCategoryButton />
                    <EventCategoryButton />
                    <EventCategoryButton />
                </div>
                <button className={styles.button}>Сохранить</button>
        </dialog>
    )
}