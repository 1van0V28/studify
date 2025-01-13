import { EventInfoFull, TemplateInfoFull, FiltersInfo, InfoTypes, InfoCategories } from './types'

export const initEventInfo: EventInfoFull = {
    week: '',
    day: '',
    order: '',
    room: '',
    subject: '',
    type: '',
}

export const initTemplateInfo: TemplateInfoFull = {
    id: '',
    name: '',
}

export const initEventCategories: FiltersInfo = {
    'practice': false,
    'lecture': false,
    'test': false,
    'project': false,
    'colloquium': false,
    'homework': false,
}


export const orderTimeMap: {[orderKey: string]: string} = {
    1: '8:30-10:00',
    2: '10:10-11:40',
    3: '11:50-13:20',
    4: '13:30-15:00',
    5: '15:10-16:40',
    6: '16:50-18:20',
    7: '18:20-19:50',
    8: '20:00-21:30',
}

export const nameMap: {[nameKey in InfoCategories | InfoTypes]: string} = {
    practice: 'Практика',
    lecture: 'Лекция',
    test: 'Тест',
    project: 'Проект',
    colloquium: 'Коллоквиум',
    homework: 'ДЗ',
    '': '',
}

export const weekdaysMap: {[dayKey: string]: string}  = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четврег',
    5: 'Пятница',
    6: 'Суббота',
}