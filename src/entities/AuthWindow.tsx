import { useState } from 'react'
import { AuthNavigator } from '@/features/AuthNavigator'
import { LoginSection } from '@/features/LoginSection'
import { SignupSection } from '@/features/SignupSection'
import styles from '@/app/styles/styles_entities/AuthWindow.module.css'


type T = 'login' | 'signup'


export function AuthWindow() {
    const [windowState, setAuthState] = useState<T>('login')

    const changeSection = function(sectionName: T) {
        setAuthState(sectionName)
    }

    return (
        <div className={styles.container}>
            <AuthNavigator changeSection={changeSection} windowState={windowState} />
            {windowState === 'login'
            ?
            <LoginSection />
            :
            <SignupSection />
            }
        </div>
    )
}