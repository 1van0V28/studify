import { ReactNode } from 'react'
import styles from '@/app/styles/styles_shared/NavigatorButton.module.css'

export function NavigatorButton(props: {children: ReactNode}) {
    return (
        <button className={styles.button} onClick={() => {console.log('pip')}}>
            {props.children}
        </button>
    )
}