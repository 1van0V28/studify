import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import styles from '@/app/styles/styles_shared/AccountButton.module.css'


const getWindowStyle = function(isOpen: boolean) {
    return (isOpen ? styles.container_window : styles.container_window_hidden)
}


export function AccountButton() {
    const [windowState, setWindowState] = useState({isOpen: false})
    const router = useRouter()

    const buttonClick = function() {
        setWindowState({...windowState, isOpen: !windowState.isOpen})
    }

    const exitClick = async function() {
        const response = await fetch('', {
            method: 'POST'
        })
        if (response.ok) {
            console.log('Вышел из аккаунта')
        } else {
            console.log('Не удалось выйти из аккаунта')
        }
    }

    const changeClick = async function() {
        const response = await fetch('', {
            method: 'POST'
        })
        if (response.ok) {
            console.log('Вышел из аккаунта для смены')
            router.push('/')
        } else {
            console.log('Не удалось выйти из аккаунта для смены')
        }
    }

    const windowStyle = getWindowStyle(windowState.isOpen)

    return (
        <>
            <button className={styles.button} onClick={buttonClick}>
                <AccountCircleIcon className={styles.icon} />
            </button>
            <div className={windowStyle}>
                <button className={styles.button_window} onClick={exitClick}>Выйти из аккаунта</button>
                <button className={styles.button_window} onClick={changeClick}>Сменить аккаунт</button>
            </div>
        </>
        
    )
}