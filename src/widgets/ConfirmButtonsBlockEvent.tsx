import { AuthButton } from '@/shared/AuthButton'
import styles from '@/app/styles/styles_widgets/ConfirmButtonsBlock.module.css'
import { EventInfoFull, EventInfoState } from '@/app/types'


export function ConfirmButtonsBlockEvent(props: {
    formStatus: 'fulfilled' | 'clear',
    eventInfoState: EventInfoState
}) {
    const deleteButtonClick = async function() {
        if (props.eventInfoState.impactObjectName === 'event') {
            props.eventInfoState.impactObjectDispatch!({
                type: 'delete_event', 
                eventInfo: props.eventInfoState.eventInfo
            })
        } else if (props.eventInfoState.impactObjectName === 'event_today') {
            const response = await fetch('', {
                method: 'POST'
            })
            if (response.ok) {
                props.eventInfoState.impactObjectDispatch!({
                    type: 'delete_event', 
                    eventInfo: props.eventInfoState.eventInfo
                })
            } else {
                throw Error('error event_today delete')
            }
        }
    }

    const confirmButtonClick = async function() {
        if (props.eventInfoState.impactObjectName === 'event') {
            props.eventInfoState.impactObjectDispatch!({type: 'save_event', eventInfo: props.eventInfoState.eventInfo})
        } else if (props.eventInfoState.impactObjectName === 'event_today') {
            fetch(`${props.eventInfoState.eventInfo.id ?? ''}`) // наличие/отсутствие меняет метод
                .then((response) => response.json())
                .then((eventInfo: EventInfoFull) => {
                    props.eventInfoState.impactObjectDispatch!({type: 'save_event', eventInfo: eventInfo})
                })
                .catch((error) => {console.log(error)})
        }
    }

    return (
        <div className={styles.container_submit}>
            <div className={styles.container_submit_button}>
                <input className={styles.delete} 
                type='button' 
                value='Удалить' 
                onClick={deleteButtonClick}>
                </input>
            </div>
            <div className={styles.container_submit_button}>
                <AuthButton
                htmlAttributes={{
                    type: 'button',
                    value: 'Сохранить',
                }} 
                formStatus={props.formStatus}
                confirmChanges={confirmButtonClick} />
            </div>
        </div>
    )
}