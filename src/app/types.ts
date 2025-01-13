export type StatesWindow = 'close' | 'show'
export type StatesAuth = 'ВХОД' | 'РЕГИСТРАЦИЯ'
export type StatesTextBlock = 'ДЗ' | 'ЗАМЕТКИ'

export type ChangeSectionAuth = (sectionName: StatesAuth) => void
export type ChangeSectionTextBlock = (sectionName: StatesTextBlock) => void

export type TimetableToday = {[orderKey: string]: EventInfoFull}
export type Timetable = {[dayKey: string]: {[orederKey: string]: EventInfoFull}}
export type FiltersInfo = {[filterKey in InfoCategories] : boolean}

export type InfoInputs = 'room' | 'subject' | 'teacher' | 'name'
export type InfoTypes = '' | 'practice' | 'lecture'
export type InfoCategories = 'practice' | 'lecture' | 'test' | 'project' | 'colloquium' | 'homework'
export type InfoTextAreas = 'homework' | 'notes' | 'description'


export interface EventInfoBase {
    week: string,
    day: string,
    order: string,
}

export interface EventInfoFull extends EventInfoBase {
    room: string,
    subject: string,
    type: InfoTypes,
    teacher?: string,
    homework?: string,
    notes?: string,
    test?: boolean,
    project?: boolean,
    colloquium?: boolean,
}

export interface TemplateInfoFull {
    id: string
    name: string,
    description?: string,
}