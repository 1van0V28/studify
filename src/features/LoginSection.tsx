import { useState, useId, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { AuthInputArea } from '@/shared/AuthInputArea'
import { AuthInput } from '@/shared/AuthInput'
import { AuthButton } from '@/shared/AuthButton'
import styles from '@/app/styles/styles_features/LoginSection.module.css'


const getFormStatus = function(inputValues: {email: string, password: string}) {
    if (inputValues.email && inputValues.password) {
        return 'fulfilled'
    } else {
        return 'clear'
    }
}


export function LoginSection() {
    const [inputState, setInputState] = useState({
        email: '',
        password: '',
    })
    const router = useRouter()
    const formId = useId()
    const emailId = useId()
    const passwordId = useId()

    const handleChange = function(event: ChangeEvent<HTMLInputElement>) {
        setInputState({...inputState, [event.target.name] : event.target.value})
    }

    const loginSubmit = async function(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        if (response.ok) { 
            router.push('/home')
        } else {
            alert('Что-то пошло не так с входом...') // в соответствие с ошибкой необходимо сообщить о ней полльзователю
        }
    }

    return (
        <>
            <form className={styles.container} id={formId} onSubmit={loginSubmit} noValidate>
                <AuthInputArea
                id={emailId}
                labelName={'Email'}
                error={''}
                inputValue={inputState.email}>
                    <AuthInput
                    htmlProps={{type: 'email', name: 'email', id: emailId}}
                    error={''}
                    inputValue={inputState.email}
                    handleChange={handleChange} />
                </AuthInputArea>
                
                <AuthInputArea
                id={passwordId}
                labelName={'Пароль'}
                error={''}
                inputValue={inputState.password}>
                    <AuthInput
                    htmlProps={{type: 'password', name: 'password', id: passwordId}}
                    error={''}
                    inputValue={inputState.password}
                    handleChange={handleChange} />
                </AuthInputArea>
            </form>
            <div className={styles.container_button}>
                <AuthButton htmlAttributes={{
                    value: 'Войти',
                    form: formId
                }}
                formStatus={getFormStatus(inputState)} />
            </div>
        </>
    )
}