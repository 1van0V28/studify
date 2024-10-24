import styles from '@/shared/styles/SwitchButton.module.css'


export function SwitchButton(props: {direction: 'prev' | 'next', switchWeek: (switcher: 'prev' | 'next') => void}) {
    const buttonClick = function() {
        props.switchWeek(props.direction) // передаём направление, чтобы переключать на предыдущую или следующую неделю
    }

    return (
        <button className={styles.button} onClick={buttonClick}></button>
    )
}