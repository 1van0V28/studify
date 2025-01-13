import { RefObject, ChangeEvent } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { TemplateInfoFull } from '@/app/types'
import { EventInfoInput } from '@/shared/EventInfoInput'
import { EventInfoText } from '@/shared/EventInfoText'
import { ConfirmButtonsBlock } from './ConfirmButtonsBlock'
import styles from '@/app/styles/styles_widgets/TemplateInfo.module.css'


const getTemplateInfoStatus = function(name: string) {
    return (name ? 'fulfilled' : 'clear')
}


export function TemplateInfo(props: {
    templateInfoRef: RefObject<HTMLDialogElement>,
    templateInfo: TemplateInfoFull,
    changeTemplateInfo: (templateInfo: TemplateInfoFull) => void,
    closeTemplateInfo: () => void,
}) {
    const handleInputChange = function(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        props.changeTemplateInfo({...props.templateInfo, [event.target.name]: event.target.value})
    }
    
    return (
        <dialog ref={props.templateInfoRef} className={styles.container}>
            <ClearIcon className={styles.button} onClick={props.closeTemplateInfo}/>
            <form className={styles.container_form}>
                <EventInfoInput 
                htmlAttrs={{
                    name: 'name',
                    placeholder: 'Название шаблона*',
                    value: props.templateInfo.name
                }}
                handleChange={handleInputChange} />
                <EventInfoText
                htmlAttrs={{
                    name: 'description',
                    placeholder: 'Здесь можно описать шаблон...',
                    value: (props.templateInfo.description ?? '')
                }}
                handleChange={handleInputChange} />
                <ConfirmButtonsBlock formStatus={getTemplateInfoStatus(props.templateInfo.name)} />
            </form>
        </dialog>
    )
}