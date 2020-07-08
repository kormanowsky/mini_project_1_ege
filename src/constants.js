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
            colorDark: "#036e8d",
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
            colorDark: "#a4061a",
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
                    author: "Р. К. Гордин",
                    price: 300,
                    image:
                        "https://img3.labirint.ru/rc/caee3e22cfe25d08983437f59dd45f91/220x340/books72/710615/cover.jpg?1567609834",
                },
                {
                    url: "https://www.labirint.ru/books/715639/?p=30217",
                    image:
                        "https://img3.labirint.ru/rc/2733735be349988e83761da75e5fe65f/220x340/books72/715639/cover.jpg?1569435956",
                    author: "Н. И. Авилов и др.",
                    price: 300,
                    title:
                        "ЕГЭ-2020 Математика. 40 тренировочных вариантов. Профильный уровень",
                },
                {
                    url: "https://www.labirint.ru/books/705065/?p=30217",
                    title:
                        "ЕГЭ. Математика. Алгебра. Задания с развернутым ответом",
                    image:
                        "https://img3.labirint.ru/rc/6b186c4b919f748b952ea7b1c354ffd1/220x340/books71/705065/cover.jpg?1563081909",
                    author: "С. В. Дерезин и др.",
                    price: 309,
                },
                {
                    url: "https://www.labirint.ru/books/586726/?p=30217",
                    title: "Математика. Авторский курс подготовки к ЕГЭ",
                    image:
                        "https://img4.labirint.ru/rc/508a15476b5a004dd502e196f36ab71b/220x340/books59/586726/cover.jpg?1564000973",
                    author: "А. Г. Малкова",
                    price: 706,
                },
                {
                    url: "https://www.labirint.ru/books/673722/?p=30217",
                    title: "Математика. Задания высокой и повышенной сложности",
                    image:
                        "https://img4.labirint.ru/rc/6df3c3daf4cce7f52fbd542c02f8454f/220x340/books68/673722/cover.jpg?1564162495",
                    author: "А. Г. Малкова",
                    price: 635,
                },
                {
                    url: "https://www.labirint.ru/books/710622/?p=30217",
                    image:
                        "https://img4.labirint.ru/rc/cc3597731448adc437688748ebd1ac30/220x340/books72/710622/cover.jpg?1567609839",
                    price: 312,
                    title:
                        "ЕГЭ-2020 Математика. Задачи с параметром. Задача 18 (профильный уровень)",
                    author: "С. А. Шестаков",
                },
                {
                    url: "https://www.labirint.ru/books/717799/?p=30217",
                    image:
                        "https://img3.labirint.ru/rc/8b5be95314d7f03b90692f7bd5ef982e/220x340/books72/717799/cover.jpg?1570469746",
                    price: 244,
                    title:
                        "ЕГЭ-20 Математика. Профильный уровень. Типовые экзаменационные варианты. 10 вариантов",
                    author: "И. В. Ященко и др.",
                },
                {
                    url: "https://www.labirint.ru/books/713504/?p=30217",
                    image:
                        "https://img4.labirint.ru/rc/bdff7703911f4629b3a11a4139115f83/220x340/books72/713504/cover.jpg?1567611402",
                    price: 384,
                    title:
                        "ЕГЭ-2020. Математика. Типовые варианты экзаменационных заданий. 50 вариантов.",
                    author: "И. В. Ященко и др.",
                },
            ],
        },
        {
            name: "Информатика и ИКТ",
            icon: "icofont-keyboard-alt",
            url: "/subject/informatics/",
            color: "#282c34",
            colorDark: "#1d2025",
            averagePoints: {
                labels: [2017, 2018, 2019],
                values: [59.2, 58.4, 62.4],
            },
        },
    ],
};
