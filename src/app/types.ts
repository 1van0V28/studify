export type StatesAuth = 'ВХОД' | 'РЕГИСТРАЦИЯ'
export type StatesTextBlock = 'ДЗ' | 'ЗАМЕТКИ'

export type ChangeSectionAuth = (sectionName: StatesAuth) => void
export type ChangeSectionTextBlock = (sectionName: StatesTextBlock) => void

export type TimetableToday = {[orderKey: string]: EventInfoFull}
export type Timetable = {[dayKey: string]: {[orederKey: string]: EventInfoFull}}


export interface EventInfoBase {
    week: string,
    day: string,
    order: string,
}

export interface EventInfoFull extends EventInfoBase {
    room: string,
    subject: string,
    type: '' | 'Практика' | 'Лекция',
    teacher?: string,
    homework?: string,
    notes?: string,
    Тест?: boolean,
    Проект?: boolean,
    Коллоквиум?: boolean,
}
