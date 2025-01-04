import { StatesTextBlock, ChangeSectionTextBlock } from '@/app/types'
import styles from '@/app/styles/styles_shared/TextBlockNavigatorButton.module.css'


export function TextBlockNavigatorButton(props: {
    name: StatesTextBlock,
    textBlockState: StatesTextBlock,
    changeSection: ChangeSectionTextBlock
}) {
    const buttonStyle = (props.name === props.textBlockState ? styles.button_active : styles.button)
    
    const buttonClick = function() {
        props.changeSection(props.name)
    }

    return (
        <button className={buttonStyle} type='button' onClick={buttonClick}>{props.name}</button>
    )
}