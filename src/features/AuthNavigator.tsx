import { AuthNavigatorButton } from '@/shared/AuthNavigatorButton'
import styles from '@/app/styles/styles_features/AuthNavigator.module.css'


type T = 'login' | 'signup'


export function AuthNavigator(props: {changeSection: (sectionName: T) => void, windowState: T}) {
    return (
        <div className={styles.container}>
            <AuthNavigatorButton 
            name={'login'} 
            windowState={props.windowState}
            changeSection={props.changeSection} />
            <AuthNavigatorButton 
            name={'signup'} 
            windowState={props.windowState}
            changeSection={props.changeSection} />
        </div>
    )
}