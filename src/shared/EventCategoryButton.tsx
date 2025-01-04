import { ChangeEvent } from 'react'
import styles from '@/app/styles/styles_shared/EventInfoCheckbox.module.css'


type EventInfoCategoriesNames = 'Тест' | 'Проект' | 'Коллоквиум'


export function EventCategoryButton(props: {
    name: EventInfoCategoriesNames, 
    checked: boolean,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <label>
            <input className={styles.input} 
            type='checkbox' 
            name={props.name}
            checked={props.checked}
            onChange={props.handleChange}>
            </input>
            <span className={styles.label}>{props.name}</span>
        </label>
    )
}