import { TimetableWeek, TimetableDay, Templates } from './types'


export const testWeekTableData: TimetableWeek = {
    monday: {
        1: {
            day: 'monday',
            order: '1',
            room: 'D212',
            date: '2025-1-20',
            subject: 'Математическая логика и теория алгоритмов',
            type: 'lecture',
            teacher: 'Черныш Елена Валерьевна',
            homework: 'Сделать ИДЗ',
            'colloquium': true,
        },
        2: {
            day: 'monday',
            order: '2',
            room: 'D212',
            date: '2025-1-20',
            subject: 'Программная инженерия',
            type: 'lecture',
            teacher: 'Скурский Степан Валерьевич',
            'test': true,
            'project': false,
            'colloquium': false,
        },
    },
    tuesday: {
        2: {
            day: 'tuesday',
            order: '2',
            room: 'D207',
            date: '2025-1-21',
            subject: 'Аналитическая геометрия и компьютерная графика',
            type: 'lecture',
            teacher: 'Гузев Михаил Александрович',
            test: false,
            project: false,
            colloquium: false,
        },
        5: {
            day: 'tuesday',
            order: '5',
            room: 'D659',
            date: '2025-1-21',
            subject: 'Алгоритмы и структуры данных',
            type: 'practice',
            teacher: 'Малыкина Ирина Анатольевна',
            'test': false,
            'project': true,
            'colloquium': false,
        },
        6: {
            day: 'tuesday',
            order: '6',
            room: 'S',
            date: '2025-1-21',
            subject: 'Физкультура',
            type: 'practice',
            homework: 'Написать конспект',
            test: false,
            project: false,
            colloquium: false,
        },
    },
    wednesday: {
        3: {
            day: 'wednesday',
            order: '3',
            room: 'D447',
            date: '2025-1-22',
            subject: 'Программная инженерия',
            type: 'practice',
            teacher: 'Скурский Степан Андреевич',
            'test': false,
            'project': true,
            'colloquium': true,
        },
        4: {
            day: 'wednesday',
            order: '4',
            room: 'D546a',
            date: '2025-1-22',
            subject: 'Программная инженерия',
            type: 'practice',
            teacher: 'Скурский Степан Андреевич',
            'test': true,
            'project': false,
            'colloquium': true,
    
        },
        6: {
            day: 'wednesday',
            order: '6',
            room: 'D818',
            date: '2025-1-22',
            subject: 'Математическая логика и теория алгоритмов',
            type: 'practice',
            teacher: 'Черныш Елена Валерьевна',
            test: false,
            project: false,
            colloquium: false,
        },
    },
    thursday: {},
    friday: {
        1: {
            day: 'friday',
            order: '1',
            room: 'D212',
            date: '2025-1-24',
            subject: 'Дифференциальные уравнения',
            type: 'lecture',
            teacher: 'Чеботарев Александр Юрьевич',
            test: false,
            project: false,
            colloquium: false,
        },
        3: {
            day: 'friday',
            order: '3',
            room: 'E236',
            date: '2025-1-24',
            subject: 'Теория вероятности и математическая статистика',
            type: 'lecture',
            teacher: 'Тарасова Ирина Михайловна',
            'test': false,
            'project': false,
            'colloquium': true,
        },
        4: {
            day: 'friday',
            order: '4',
            room: 'D504',
            date: '2025-1-24',
            subject: 'Теория вероятности и математическая статистика',
            type: 'practice',
            teacher: 'Тарасова Ирина Михайловна',
            'test': true,
            'project': false,
            'colloquium': false,
        },
        5: {
            day: 'friday',
            order: '5',
            room: 'D654',
            date: '2025-1-24',
            subject: 'Алгоритмы и структуры данных',
            type: 'lecture',
            teacher: 'Малыкина Ирина Анатольевна',
            test: false,
            project: false,
            colloquium: false,
        },
        6: {
            day: 'friday',
            order: '6',
            room: 'S',
            date: '2025-1-24',
            subject: 'Физкультура',
            type: 'practice',
            teacher: 'Светлана Анатольевна',
            test: false,
            project: false,
            colloquium: false,
        },
    },
    saturday: {
        1: {
            day: 'saturday',
            order: '1',
            room: 'D738',
            date: '2025-1-25',
            subject: 'Основы теории кодирования',
            type: 'lecture',
            teacher: 'Серга Ирина Викторовна',
            test: false,
            project: false,
            colloquium: false,
        },
        2: {
            day: 'saturday',
            order: '2',
            room: 'D656',
            date: '2025-1-25',
            subject: 'Основы теории кодирования',
            type: 'practice',
            teacher: 'Серга Ирина Викторовна',
            test: false,
            project: false,
            colloquium: false,
        },
        3: {
            day: 'saturday',
            order: '3',
            room: 'D809',
            date: '2025-1-25',
            subject: 'Аналитическая геометрия и компьютерная графика',
            type: 'practice',
            teacher: 'Курочкина Ирина Алексеевна',
            test: false,
            project: false,
            colloquium: false,
        },
        4: {
            day: 'saturday',
            order: '4',
            room: 'E715',
            date: '2025-1-25',
            subject: 'Безопасность жизнедеятельности',
            type: 'practice',
            teacher: 'Некто Рандом',
            test: false,
            project: false,
            colloquium: false,
        },
    },
}

export const testTodayTableData: TimetableDay = {
    1: {
        day: 'monday',
        order: '1',
        room: 'D212',
        date: '2025-1-22',
        subject: 'Математическая логика и теория алгоритмов',
        type: 'lecture',
        teacher: 'Черныш Елена Валерьевна',
        'test': false,
        'project': false,
        'colloquium': true,
    },
    2: {
        day: 'monday',
        order: '2',
        room: 'D212',
        date: '2025-1-22',
        subject: 'Программная инженерия',
        type: 'lecture',
        teacher: 'Скурский Степан Валерьевич',
        'test': true,
        'project': false,
        'colloquium': false,
    },
}

export const testTemplatesData: Templates = {
    'chet': {
        id: 'chet',
        name: 'Чётные страдания',
        description: 'Данный круг ада содержит в себе дифференциальные уравнения и физику, поэтому нельзя расслаблять булки.',
        timetable: {...testWeekTableData},
    },
    'nechet': {
        id: 'nechet',
        name: 'Нечётное блаженство',
        description: 'На этой неделе можно расслабиться, ибо расписание чилловое.',
        timetable: {
            monday: {},
            tuesday: {},
            wednesday: {},
            thursday: {},
            friday: {},
            saturday: {},
        },
    },
    'test': {
        id: 'test',
        name: 'Тестовый шаблон',
        timetable: {...testWeekTableData},
    }
}