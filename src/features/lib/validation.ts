const DIGITS = /\d/
const LETTERS = /[a-z]/
const LETTERS_CAPITAL = /[A-Z]/
const LETTERS_NOT_LATIN = /[а-я]/i
const SPECIALS = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/


export const getNicknameErrors = function(nickname: string) {
    if (!nickname) {
        return ''
    } else if (nickname.length < 6) {
        return 'Не менее 6 символов'
    } else if (nickname.length > 12) {
        return 'Не более 12 символов'
    } else if (SPECIALS.test(nickname)) {
        return 'Без специальных символов'
    } else {
        return ''
    }
}


export const getPasswordErrors = function(password: string) {
    if (!password) {
        return ''
    } else if (LETTERS_NOT_LATIN.test(password)) {
        return 'Только латинские буквы'
    } else if (password.length < 8) {
        return 'Не менее 8 символов'
    } else if (password.length > 16) {
        return 'Не более 16 символов'
    } else if (!DIGITS.test(password)) {
        return 'Хотя бы одну цифру'
    } else if (!LETTERS.test(password)) {
        return 'Хотя бы одну строчную букву'
    } else if (!LETTERS_CAPITAL.test(password)) {
        return 'Хотя бы одну заглавную букву'
    }  else if (!SPECIALS.test(password)) {
        return 'Хотя бы один специальный символ'
    } else {
        return ''
    }
}


export const getPasswordRepeatedErrors = function(password: string, passwordRepeated: string) {
    if (!passwordRepeated) {
        return ''
    } else if (password !== passwordRepeated) {
        return 'Пароли не совпадают'
    } else {
        return ''
    }
}