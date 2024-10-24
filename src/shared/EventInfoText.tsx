import styles from '@/shared/styles/EventInfoText.module.css'


export function EventInfoText() {
    return (
        <label> {/*не забыть указать for и id для textarea*/}
            <textarea className={styles.text} placeholder='Опциональная хуйня'></textarea>
        </label>
    )
}