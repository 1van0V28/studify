import { testWeekTableData, testTodayTableData, testTemplatesData } from './testData'
import { 
    Weekdays,
    EventInfoFull, 
    TimetableWeek,
    TimetableWeekState,
    TimetableTodayState,
    TemplatesState,
    EventInfoState,
    TemplatesCatalogState,
    TemplateInfoFull, 
    FiltersInfo, 
    InfoCategories,
} from './types'


export const weekdaysList: Weekdays[] = [
    'monday', 
    'tuesday', 
    'wednesday', 
    'thursday', 
    'friday', 
    'saturday',
]


export const initEventInfo: EventInfoFull = {
    day: 'monday',
    order: '1',
    date: '',
    room: '',
    subject: '',
    type: '',
}

export const initTimetableWeek: TimetableWeek = {
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
}

export const initTimetableWeekState: TimetableWeekState = {
    timetable: {...testWeekTableData}, // initTimetableWeek
    isLoading: false, // для отладки false
    shift: 0,
}

export const initTimetableTodayState: TimetableTodayState = {
    timetable: {...testTodayTableData}, // {}
    isLoading: false, // для отладки false
}

export const initTemplateInfo: TemplateInfoFull = {
    id: '',
    name: '',
    timetable: {...initTimetableWeek},
}

export const initTemplatesState: TemplatesState = {
    templates: {...testTemplatesData},
    templateInfo: {...initTemplateInfo},
    eventInfo: {...initEventInfo},
    isLoading: false, // для отладки false
}

export const initEventInfoState: EventInfoState = {
    eventInfo: {...initEventInfo},
    impactObjectName: 'event',
    impactObjectDispatch: null,
}

export const initTemplatesCatalogState: TemplatesCatalogState = {
    templates: {...testTemplatesData},
    isOpen: false,
    isLoading: false, //  для отладки false
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

export const nameMap: {[nameKey in InfoCategories | '']: string} = {
    practice: 'Практика',
    lecture: 'Лекция',
    test: 'Тест',
    project: 'Проект',
    colloquium: 'Коллоквиум',
    homework: 'ДЗ',
    '': '',
}

export const weekdaysMap: {[dayKey in Weekdays]: string}  = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четврег',
    friday: 'Пятница',
    saturday: 'Суббота',
}