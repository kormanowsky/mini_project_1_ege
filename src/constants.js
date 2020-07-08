export default {
    projectInfo: {
        name: "Project1",
        description: "Все о ЕГЭ",
    },
    subjects: [
        {
            name: "Русский язык",
            icon: "icofont-font",
            url: "/subject/russian/",
            color: "#35889f",
            averagePoints: {
                labels: [2017, 2018, 2019],
                values: [69.1, 70.1, 69.5],
            },
        },
        {
            name: "Математика",
            icon: "icofont-mathematical-alt-1",
            url: "/subject/maths/",
            color: "#c20b21",
            averagePoints: {
                labels: [2017, 2018, 2019],
                values: [47.1, 49.8, 56.5],
            },
            tasks: [
                {
                    number: 1,
                    theme: "Простейшие текстовые задачи",
                    points: 1,
                },
                {
                    number: 2,
                    theme: "Чтение графиков и диаграмм",
                    points: 1,
                },
                {
                    number: 3,
                    theme: "Квадратная решётка, координатная плоскость",
                    points: 1,
                },
                {
                    number: 4,
                    theme: "Начала теории вероятностей",
                    points: 1,
                },
                {
                    number: 5,
                    theme: "Простейшие уравнения",
                    points: 1,
                },
                {
                    number: 6,
                    theme: "Планиметрия",
                    points: 1,
                },
                {
                    number: 7,
                    theme: "Производная и первообразная",
                    points: 1,
                },
                {
                    number: 8,
                    theme: "Стереометрия",
                    points: 1,
                },
                {
                    number: 9,
                    theme: "Вычисления и преобразования",
                    points: 1,
                },
                {
                    number: 10,
                    theme: "Задачи с прикладным содержанием",
                    points: 1,
                },
                {
                    number: 11,
                    theme: "Текстовые задачи",
                    points: 1,
                },
                {
                    number: 12,
                    theme: "Наибольшее и наименьшее значение функций",
                    points: 1,
                },
                {
                    number: 13,
                    theme: "Уравнения",
                    points: 2,
                },
                {
                    number: 14,
                    theme: "Стереометрия",
                    points: 2,
                },
                {
                    number: 15,
                    theme: "Неравенства",
                    points: 2,
                },
                {
                    number: 16,
                    theme: "Планиметрия",
                    points: 3,
                },
                {
                    number: 17,
                    theme: "Экономическая задача",
                    points: 3,
                },
                {
                    number: 18,
                    theme: "Задача с параметром",
                    points: 4,
                },
                {
                    number: 19,
                    theme: "Задача на числа и их свойства",
                    points: 4,
                },
            ],
            books: [
                {
                    url: "https://www.labirint.ru/books/710615/?p=30217",
                    title:
                        "ЕГЭ-2020 Математика. Геометрия. Планиметрия. Задача 16 (профильный уровень)",
                    author: "Гордин",
                    price: 300,
                    image:
                        "https://img3.labirint.ru/rc/caee3e22cfe25d08983437f59dd45f91/220x340/books72/710615/cover.jpg?1567609834",
                },
                {
                    url: "https://www.labirint.ru/books/715639/?p=30217",
                    image:
                        "https://img3.labirint.ru/rc/2733735be349988e83761da75e5fe65f/220x340/books72/715639/cover.jpg?1569435956",
                    author:
                        "Авилов, Домашенко, Дерезин и др.",
                    price: 300,
                    title:
                        "ЕГЭ-2020 Математика. 40 тренировочных вариантов. Профильный уровень",
                },
            ],
        },
        {
            name: "Информатика и ИКТ",
            icon: "icofont-keyboard-alt",
            url: "/subject/informatics/",
            color: "#282c34",
            averagePoints: {
                labels: [2017, 2018, 2019],
                values: [59.2, 58.4, 62.4],
            },
        },
    ],
};
