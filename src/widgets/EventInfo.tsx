import { RefObject, ChangeEvent } from 'react'
import { EventInfoFull } from '@/app/types'
import { orderTimeMap } from '@/app/initData'
import { EventInfoInput } from '@/shared/EventInfoInput'
import { EventInfoRadio } from '@/shared/EventInfoRadio'
import { EventInfoTextBlock } from './EventInfoTextBlock'
import { EventCategoryButton } from '@/shared/EventCategoryButton'
import { AuthButton } from '@/shared/AuthButton'
import ClearIcon from '@mui/icons-material/Clear'
import styles from '@/app/styles/styles_widgets/EventInfo.module.css'


const getEventInfoStatus = function(eventInfo: EventInfoFull) {
    if (eventInfo.room && eventInfo.subject && eventInfo.type) {
        return 'fulfilled'
    } else {
        return 'clear'
    }
}


export function EventInfo(props: {
    eventInfoRef: RefObject<HTMLDialogElement>,
    eventInfo: EventInfoFull, 
    changeEventInfo: (eventInfo: EventInfoFull) => void,
    closeEventInfo: () => void
}) {

    const handleInputChange = function(event: ChangeEvent<HTMLInputElement>) {
        const {name, value, type, checked} = event.target
        if (type === 'text') {
            props.changeEventInfo({...props.eventInfo, [name]: value})
        } else if (type === 'radio') {
            props.changeEventInfo({...props.eventInfo, [name]: value})
        } else if (type === 'checkbox') {
            props.changeEventInfo({...props.eventInfo, [name]: checked})
        }
    }

    const handleTextareaChange = function(event: ChangeEvent<HTMLTextAreaElement>) {
        props.changeEventInfo({...props.eventInfo, [event.target.name]: event.target.value})
    }

    return (
        <dialog className={styles.container} ref={props.eventInfoRef}>
                <ClearIcon className={styles.button} onClick={props.closeEventInfo} />
                <form className={styles.container_form}>
                    <EventInfoInput 
                    htmlAttrs={{
                        name: 'room',
                        placeholder: 'Номер аудитории*', 
                        value: (props.eventInfo.room ?? ''),
                    }}
                    handleChange={handleInputChange} />
                    <EventInfoInput 
                    htmlAttrs={{
                        name: 'subject',
                        placeholder: 'Название предмета*', 
                        value: (props.eventInfo.subject ?? ''),
                    }}
                    handleChange={handleInputChange} />

                    <div className={styles.container_buttons}>
                        <EventInfoRadio 
                        checkedRadio={props.eventInfo.type} 
                        value={'Практика'} 
                        handleChange={handleInputChange} />
                        <EventInfoRadio 
                        checkedRadio={props.eventInfo.type} 
                        value={'Лекция'} 
                        handleChange={handleInputChange} />
                    </div>

                    <div className={styles.container_info}>
                        <h3>{orderTimeMap[props.eventInfo.order]} ({props.eventInfo.order} пара)</h3>
                        <p>|дата из данных|</p>
                    </div>

                    <EventInfoInput
                    htmlAttrs={{
                        name: 'teacher',
                        placeholder: 'Имя преподавателя', 
                        value: (props.eventInfo.teacher ?? '')
                    }} 
                    handleChange={handleInputChange} />
                    <EventInfoTextBlock
                    values={{
                        homework: (props.eventInfo.homework ?? ''),
                        notes: (props.eventInfo.notes ?? '')
                    }} 
                    handleChange={handleTextareaChange} />

                    <div className={styles.container_buttons} >
                        <EventCategoryButton 
                        name='Тест' 
                        checked={props.eventInfo['Тест'] ?? false}
                        handleChange={handleInputChange} />
                        <EventCategoryButton 
                        name='Проект' 
                        checked={props.eventInfo['Проект'] ?? false}
                        handleChange={handleInputChange} />
                        <EventCategoryButton 
                        name='Коллоквиум' 
                        checked={props.eventInfo['Коллоквиум'] ?? false}
                        handleChange={handleInputChange} />
                    </div>

                    <div className={styles.container_submit}>
                        <div className={styles.container_submit_button}>
                            <input className={styles.delete} type='button' value='Удалить'></input>
                        </div>
                        <div className={styles.container_submit_button}>
                            <AuthButton formStatus={getEventInfoStatus(props.eventInfo)} />
                        </div>
                    </div>
                </form>
        </dialog>
    )
}