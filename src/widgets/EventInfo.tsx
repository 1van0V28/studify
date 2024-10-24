import { useId, useContext } from 'react'
import { EventInfoText } from '@/shared/EventInfoText'
import { EventCategoryButton } from '@/shared/EventCategoryButton'
import { FirestoreContext } from '@/app/context/firestoreContext'
import styles from '@/widgets/styles/EventInfo.module.css'


export function EventInfo() {
    const formId = useId()
    const firestore = useContext(FirestoreContext)

    return (
        <dialog className={styles.container}>
            <form id={formId}>
                <div className={styles.container_top}>
                    <EventInfoText />
                    <button>X</button>
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
            </form>
            
        </dialog>
    )
}