import styles from '@/app/styles/styles_shared/AuthNavigatorButton.module.css'


type T = 'login' | 'signup'


export function AuthNavigatorButton(props: {
    name: T,
    windowState: T,
    changeSection: (sectionName: T) => void
}) {
    const buttonName = (props.name === 'login' ? 'ВХОД' : 'РЕГИСТРАЦИЯ')
    const buttonStyle = (props.name === props.windowState ? styles.button_active : styles.button)

    const buttonClick = function() {
        props.changeSection(props.name)
    }

    return (
        <button className={buttonStyle} onClick={buttonClick}>{buttonName}</button>
    )
}