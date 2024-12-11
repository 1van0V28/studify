import { useState, useId, ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { getNicknameErrors, getPasswordErrors, getPasswordRepeatedErrors } from './lib/validation'
import { AuthInputArea } from '@/shared/AuthInputArea'
import { AuthInput } from '@/shared/AuthInput'
import { AuthButton } from '@/shared/AuthButton'
import styles from '@/app/styles/styles_features/SignupSection.module.css'


interface InputValues {
    nickname: string,
    email: string,
    password: string,
    password_repeated: string,
}


const isFulfilled = function(inputValues: InputValues) {
    return inputValues.nickname && inputValues.email && inputValues.password && inputValues.password_repeated     
}


const hasErrors = function(inputErrors: InputValues) {
    return inputErrors.nickname || inputErrors.email || inputErrors.password || inputErrors.password_repeated
}


const getFormStatus = function(inputValues: InputValues, inputErrors: InputValues) {
    if (isFulfilled(inputValues) && !hasErrors(inputErrors)) {
        return 'fulfilled'
    } else {
        return 'clear'
    }
}


export function SignupSection() {
    const [inputState, setInputState] = useState({
        nickname: '',
        email: '',
        password: '',
        password_repeated: '',
    })
    const router = useRouter()
    const errors = {
        nickname: getNicknameErrors(inputState.nickname),
        email: '',
        password: getPasswordErrors(inputState.password),
        password_repeated: getPasswordRepeatedErrors(inputState.password, inputState.password_repeated)
    }
    const formStatus = getFormStatus(inputState, errors)
    const formId = useId()
    const nickNameId = useId()
    const emailId = useId()
    const passwordId = useId()
    const password_repeatedId = useId()

    const handleChange = function(event: ChangeEvent<HTMLInputElement>) {
        setInputState({...inputState, [event.target.name] : event.target.value})
    }

    const signupSubmit = async function(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        formData.delete('password_repeated')

        const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            router.push('/home')
        } else {
            alert('Что-то пошло не так с регистрацией...') // сообщить пользователю об ошибке
        }
    }

    return (
        <>
            <form className={styles.container} onSubmit={signupSubmit} id={formId} noValidate>
                <AuthInputArea
                id={nickNameId}
                labelName={'Никнейм'}
                error={errors.nickname}
                inputValue={inputState.nickname}>
                    <AuthInput
                    htmlProps={{type: 'text', name: 'nickname', id: nickNameId}} 
                    error={errors.nickname}
                    inputValue={inputState.nickname}
                    handleChange={handleChange} />
                </AuthInputArea>

                <AuthInputArea
                id={emailId}
                labelName={'Email'}
                error={errors.email}
                inputValue={inputState.email}>
                    <AuthInput
                    htmlProps={{type: 'email', name: 'email', id: emailId}} 
                    error={errors.email}
                    inputValue={inputState.email}
                    handleChange={handleChange} />
                </AuthInputArea>

                <AuthInputArea
                id={passwordId}
                labelName={'Пароль'}
                error={errors.password}
                inputValue={inputState.password}>
                    <AuthInput
                    htmlProps={{type: 'password', name: 'password', id: passwordId}} 
                    error={errors.password}
                    inputValue={inputState.password}
                    handleChange={handleChange} />
                </AuthInputArea>

                <AuthInputArea
                id={password_repeatedId}
                labelName={'Повторный пароль'}
                error={errors.password_repeated}
                inputValue={inputState.password_repeated}>
                    <AuthInput
                    htmlProps={{type: 'password', name: 'password_repeated', id: password_repeatedId}} 
                    error={errors.password_repeated}
                    inputValue={inputState.password_repeated}
                    handleChange={handleChange} />
                </AuthInputArea>
            </form>
            <AuthButton 
            name={'Зарегестрироваться'} 
            form={formId} 
            formStatus={formStatus} />
        </>
    )
}