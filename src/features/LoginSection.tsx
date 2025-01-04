import { useState, useId, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { LoginInput } from '@/shared/LoginInput'
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
                <LoginInput 
                labelName={'Email'} 
                type={'email'} 
                name={'email'}
                handleChange={handleChange} />
                <LoginInput
                labelName={'Пароль'}
                type={'password'} 
                name={'password'}
                handleChange={handleChange} />
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