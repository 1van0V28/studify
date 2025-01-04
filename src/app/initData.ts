import { EventInfoFull } from './types'

export const initEventInfo: EventInfoFull = {
    week: '',
    day: '',
    number: '',
    room: '',
    subject: '',
    type: '',
    teacher: '',
    Тест: false,
    Проект: false,
    Коллоквиум: false,
}

export const orderTimeMap: {[key: string]: string} = {
    1: '8:30-10:00',
    2: '10:10-11:40',
    3: '11:50-13:20',
    4: '13:30-15:00',
    5: '15:10-16:40',
    6: '16:50-18:20',
    7: '18:20-19:50',
    8: '20:00-21:30',
}