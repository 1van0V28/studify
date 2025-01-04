import { TimetableToday, Timetable } from './types'


export const testWeekTableData: Timetable = {
    1: {
        1: {
            week: '1',
            day: '1',
            order: '1',
            room: 'D212',
            subject: 'Математическая логика и теория алгоритмов',
            type: 'Лекция',
            teacher: 'Черныш Елена Валерьевна',
            'Тест': false,
            'Проект': false,
            'Коллоквиум': true,
        },
        2: {
            week: '1',
            day: '1',
            order: '2',
            room: 'D212',
            subject: 'Программная инженерия',
            type: 'Лекция',
            teacher: 'Скурский Степан Валерьевич',
            'Тест': true,
            'Проект': false,
            'Коллоквиум': false,
        },
    },
    2: {
        2: {
            week: '1',
            day: '2',
            order: '2',
            room: 'D207',
            subject: 'Аналитическая геометрия и компьютерная графика',
            type: 'Лекция',
            teacher: 'Гузев Михаил Александрович',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
        5: {
            week: '1',
            day: '2',
            order: '5',
            room: 'D659',
            subject: 'Алгоритмы и структуры данных',
            type: 'Практика',
            teacher: 'Малыкина Ирина Анатольевна',
            'Тест': false,
            'Проект': true,
            'Коллоквиум': false,
        },
        6: {
            week: '1',
            day: '2',
            order: '6',
            room: 'S',
            subject: 'Физкультура',
            type: 'Практика',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
    },
    3: {
        3: {
            week: '1',
            day: '3',
            order: '3',
            room: 'D447',
            subject: 'Программная инженерия',
            type: 'Практика',
            teacher: 'Скурский Степан Андреевич',
            'Тест': false,
            'Проект': true,
            'Коллоквиум': true,
        },
        4: {
            week: '1',
            day: '3',
            order: '4',
            room: 'D546a',
            subject: 'Программная инженерия',
            type: 'Практика',
            teacher: 'Скурский Степан Андреевич',
            'Тест': true,
            'Проект': false,
            'Коллоквиум': true,
    
        },
        6: {
            week: '1',
            day: '3',
            order: '6',
            room: 'D818',
            subject: 'Математическая логика и теория алгоритмов',
            type: 'Практика',
            teacher: 'Черныш Елена Валерьевна',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
    },
    4: {},
    5: {
        1: {
            week: '1',
            day: '5',
            order: '1',
            room: 'D212',
            subject: 'Дифференциальные уравнения',
            type: 'Лекция',
            teacher: 'Чеботарев Александр Юрьевич',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
        3: {
            week: '1',
            day: '5',
            order: '3',
            room: 'E236',
            subject: 'Теория вероятности и математическая статистика',
            type: 'Лекция',
            teacher: 'Тарасова Ирина Михайловна',
            'Тест': false,
            'Проект': false,
            'Коллоквиум': true,
        },
        4: {
            week: '1',
            day: '5',
            order: '4',
            room: 'D504',
            subject: 'Теория вероятности и математическая статистика',
            type: 'Практика',
            teacher: 'Тарасова Ирина Михайловна',
            'Тест': true,
            'Проект': false,
            'Коллоквиум': false,
        },
        5: {
            week: '1',
            day: '5',
            order: '5',
            room: 'D654',
            subject: 'Алгоритмы и структуры данных',
            type: 'Лекция',
            teacher: 'Малыкина Ирина Анатольевна',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
        6: {
            week: '1',
            day: '5',
            order: '6',
            room: 'S',
            subject: 'Физкультура',
            type: 'Практика',
            teacher: 'Светлана Анатольевна',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
    },
    6: {
        1: {
            week: '1',
            day: '6',
            order: '1',
            room: 'D738',
            subject: 'Основы теории кодирования',
            type: 'Лекция',
            teacher: 'Серга Ирина Викторовна',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
        2: {
            week: '1',
            day: '6',
            order: '2',
            room: 'D656',
            subject: 'Основы теории кодирования',
            type: 'Практика',
            teacher: 'Серга Ирина Викторовна',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
        3: {
            week: '1',
            day: '6',
            order: '3',
            room: 'D809',
            subject: 'Аналитическая геометрия и компьютерная графика',
            type: 'Практика',
            teacher: 'Курочкина Ирина Алексеевна',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
        4: {
            week: '1',
            day: '6',
            order: '4',
            room: 'E715',
            subject: 'Безопасность жизнедеятельности',
            type: 'Практика',
            teacher: 'Некто Рандом',
            Тест: false,
            Проект: false,
            Коллоквиум: false,
        },
    },
}

export const testTodayTableData: TimetableToday = {
    1: {
        week: '1',
        day: '1',
        order: '1',
        room: 'D212',
        subject: 'Математическая логика и теория алгоритмов',
        type: 'Лекция',
        teacher: 'Черныш Елена Валерьевна',
        'Тест': false,
        'Проект': false,
        'Коллоквиум': true,
    },
    2: {
        week: '1',
        day: '1',
        order: '2',
        room: 'D212',
        subject: 'Программная инженерия',
        type: 'Лекция',
        teacher: 'Скурский Степан Валерьевич',
        'Тест': true,
        'Проект': false,
        'Коллоквиум': false,
    },
}