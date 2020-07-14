export default {
    projectInfo: {
        name: "Project1",
        description: "Полезная информация о ЕГЭ",
    },
    subjects: [
        {
            name: "Русский язык",
            mainInfo:
                "ЕГЭ по русскому языку - обязательный экзамен для всех выпускников школ России, который проверяет знание языковых норм и необходимые каждому умения, такие как выделение главного в тексте, точное и грамотное формулирование своих мыслей с соблюдением всех правил русского языка.",
            icon: "icofont-font",
            url: "/subject/russian/",
            color: "#35889f",
            averagePoints: {
                labels: [2017, 2018, 2019],
                values: [69.1, 70.1, 69.5],
            },
            tasks: [
                {
                    theme: "Определение главной информации текста",
                    number: 1,
                    points: 1,
                },
                {
                    theme: "Средства связи предложений в тексте",
                    number: 2,
                    points: 1,
                },
                {
                    theme: "Определение лексического значения слова",
                    number: 3,
                    points: 1,
                },
                { theme: "Постановка ударения", number: 4, points: 1 },
                { theme: "Употребление паронимов", number: 5, points: 1 },
                { theme: "Лексические нормы", number: 6, points: 1 },
                {
                    theme: "Морфологические нормы (образование форм слова)",
                    number: 7,
                    points: 1,
                },
                { theme: "Синтаксические нормы", number: 8, points: 5 },
                { theme: "Правописание корней", number: 9, points: 1 },
                { theme: "Правописание приставок", number: 10, points: 1 },
                {
                    theme: "Правописание суффиксов (кроме -Н-/-НН-)",
                    number: 11,
                    points: 1,
                },
                {
                    theme:
                        "Пра­во­пи­са­ние личных окон­ча­ний глаголов и суф­фик­сов причастий",
                    number: 12,
                    points: 1,
                },
                { theme: "Правописание НЕ и НИ", number: 13, points: 1 },
                {
                    theme: "Слитное, дефисное, раздельное написание слов",
                    number: 14,
                    points: 1,
                },
                {
                    theme: "Пра­во­пи­са­ние -Н- и -НН- в суффиксах",
                    number: 15,
                    points: 1,
                },
                {
                    theme:
                        "Пунктуация в сложносочиненном предложении и в предложении с однородными членами",
                    number: 16,
                    points: 2,
                },
                {
                    theme:
                        "Знаки пре­пи­на­ния в пред­ло­же­ни­ях с обособ­лен­ны­ми членами",
                    number: 17,
                    points: 1,
                },
                {
                    theme:
                        "Знаки препинания при словах и конструкциях, не связанных с членами предложения",
                    number: 18,
                    points: 1,
                },
                {
                    theme: "Знаки препинания в сложноподчиненном предложении",
                    number: 19,
                    points: 1,
                },
                {
                    theme:
                        "Знаки препинания в сложных предложениях с разными видами связи",
                    number: 20,
                    points: 1,
                },
                {
                    theme: "Постановка знаков препинания в различных случаях",
                    number: 21,
                    points: 1,
                },
                {
                    theme: "Смысловая и композиционная целостность текста",
                    number: 22,
                    points: 1,
                },
                {
                    theme: "Функционально-смысловые типы речи",
                    number: 23,
                    points: 1,
                },
                { theme: "Лексическое значение слова", number: 24, points: 1 },
                {
                    theme: "Сред­ства связи пред­ло­же­ний в тексте",
                    number: 25,
                    points: 1,
                },
                {
                    theme: "Языковые средства выразительности",
                    number: 26,
                    points: 4,
                },
                { theme: "Сочинение", number: 27, points: 24 },
            ],
            books: [
                {
                    url: "https://www.labirint.ru/books/726531/?p=30217",
                    title:
                        "ЕГЭ-2020. Русский язык. Речь, текст, лексика и фразеология, выразительность речи (задания 22-26)",
                    author: "А. Ю. Кузнецов и др.",
                    image:
                        "https://img3.labirint.ru/rc/d381de0fde916faa92c269af207bdd2a/220x340/books73/726531/cover.jpg?1575649549",
                    price: 145,
                },
                {
                    url: "https://www.labirint.ru/books/717804/?p=30217",
                    author: "И. П. Цыбулько и др.",
                    title:
                        "ЕГЭ-2020. Русский язык. Типовые экзаменационные варианты. 10 вариантов",
                    image:
                        "https://img4.labirint.ru/rc/1afcc4d838aac0be8d0b5b0ddedcb83c/220x340/books72/717804/cover.jpg?1571577914",
                    price: 244,
                },
            ],
            websites: [
                {
                    url: "https://rus-ege.sdamgia.ru",
                    title: "Решу ЕГЭ: русский язык",
                    image: "https://ege.sdamgia.ru/img/headers/logo.svg",
                },
                {
                    url: "http://os.fipi.ru/tasks/1/a",
                    title: "Открытый банк заданий ФИПИ",
                    image: "http://os.fipi.ru/content/images/icon.png",
                },
                {
                    url: "https://yandex.ru/tutor/subject/?subject_id=3",
                    title: "Яндекс.Репетитор",
                    image:
                        "https://yastatic.net/s3/frontend/yandex-lego/serp-header/_/3JnAXF2i.svg",
                },
            ],
        },
        {
            name: "Математика",
            mainInfo:
                "Экзамен по профильной математике требуется для поступления во многие вузы на различные специальности, например, на те, которые связаны с экономикой, точными науками, информационными технологиями. Важно отметить, что если в списке вступительных испытаний по выбранному направлению есть математика, то подразумевается математика профильного уровня.",
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
            channels: [
                {
                    url: "https://www.youtube.com/user/trushinbv",
                    title: "Борис Трушин",
                    image:
                        "https://yt3.ggpht.com/a/AATXAJxpvFIEaU4qhp6yyzmQhHJktJQEwL6F1s014uvGOQ=s100-c-k-c0xffffffff-no-rj-mo",
                },
                {
                    url:
                        "https://www.youtube.com/channel/UCj0Od_id0gPbmwZ65U8xwrw",
                    title: "Wild Mathing",
                    image:
                        "https://yt3.ggpht.com/a/AATXAJyJ5S-5O_J-dFBOAfWADaDEWT2BiWCaEdgNn3nhiQ=s100-c-k-c0xffffffff-no-rj-mo",
                },
                {
                    url: "https://www.youtube.com/user/MalkovaAnna",
                    title: "Анна Малкова",
                    image:
                        "https://yt3.ggpht.com/a/AATXAJy7lvywBco26NJ5F-MQnHTghcanSRT-RjOa18wC=s100-c-k-c0xffffffff-no-rj-mo",
                },
            ],
            websites: [
                {
                    url: "https://ege.sdamgia.ru",
                    title: "Решу ЕГЭ: математика",
                    image: "https://ege.sdamgia.ru/img/headers/logo.svg",
                },
                {
                    url: "http://os.fipi.ru/tasks/2/a",
                    title: "Открытый банк заданий ФИПИ",
                    image: "http://os.fipi.ru/content/images/icon.png",
                },
                {
                    url: "https://yandex.ru/tutor/subject/?subject_id=2",
                    title: "Яндекс.Репетитор",
                    image:
                        "https://yastatic.net/s3/frontend/yandex-lego/serp-header/_/3JnAXF2i.svg",
                },
            ],
        },
        {
            name: "Информатика и ИКТ",
            mainInfo:
                "ЕГЭ по информатике и ИКТ предстоит сдать тем выпускникам, которые планируют связать свою жизнь с информационными технологиями. Экзамен включает в себя задания, связанные с различными областями информатики. Среди них: алгебра логики, системы счисления, комбинаторика, алгоритмы. Есть задания на понимание программного кода и написание своих программ.",
            icon: "icofont-keyboard-alt",
            url: "/subject/informatics/",
            color: "#282c34",
            averagePoints: {
                labels: [2017, 2018, 2019, 2020],
                values: [59.2, 58.4, 62.4, 61.2],
            },
            tasks: [
                {
                    theme:
                        "Кодирование и операции над числами в разных системах счисления",
                    number: 1,
                    points: 1,
                },
                {
                    theme: "Построение таблиц истинности логических выражений",
                    number: 2,
                    points: 1,
                },
                {
                    theme: "Анализ информационных моделей",
                    number: 3,
                    points: 1,
                },
                { theme: "Базы данных", number: 4, points: 1 },
                {
                    theme: "Кодирование и декодирование информации",
                    number: 5,
                    points: 1,
                },
                {
                    theme: "Анализ и построение алгоритмов для исполнителей",
                    number: 6,
                    points: 1,
                },
                {
                    theme: "Анализ диаграмм и электронных таблиц",
                    number: 7,
                    points: 1,
                },
                { theme: "Анализ программ", number: 8, points: 1 },
                {
                    theme: "Кодирование и декодирование информации",
                    number: 9,
                    points: 1,
                },
                {
                    theme: "Перебор слов и системы счисления",
                    number: 10,
                    points: 1,
                },
                { theme: "Рекурсивные алгоритмы", number: 11, points: 1 },
                {
                    theme: "Организация компьютерных сетей",
                    number: 12,
                    points: 1,
                },
                {
                    theme: "Вычисление количества информации",
                    number: 13,
                    points: 1,
                },
                {
                    theme: "Выполнение алгоритмов для исполнителя Робот",
                    number: 14,
                    points: 1,
                },
                { theme: "Поиск путей в графе", number: 15, points: 1 },
                { theme: "Кодирование чисел", number: 16, points: 1 },
                {
                    theme:
                        "Запросы для поисковых систем с использованием логических выражений",
                    number: 17,
                    points: 1,
                },
                {
                    theme: "Преобразование логических выражений",
                    number: 18,
                    points: 1,
                },
                { theme: "Обработка массивов и матриц", number: 19, points: 1 },
                {
                    theme: "Анализ программы с циклами и условными операторами",
                    number: 20,
                    points: 1,
                },
                {
                    theme: "Анализ программ с циклами и подпрограммами",
                    number: 21,
                    points: 1,
                },
                {
                    theme: "Оператор присваивания и ветвления",
                    number: 22,
                    points: 1,
                },
                { theme: "Логические уравнения", number: 23, points: 1 },
                {
                    theme: "Исправление ошибок в программе",
                    number: 24,
                    points: 3,
                },
                {
                    theme: "Алгоритмы обработки массивов",
                    number: 25,
                    points: 2,
                },
                { theme: "Выигрышная стратегия", number: 26, points: 3 },
                { theme: "Программирование", number: 27, points: 4 },
            ],
            books: [
                {
                    url: "https://www.labirint.ru/books/581232/?p=30217",
                    title: "Информатика. Авторский курс подготовки к ЕГЭ",
                    author: "Л. Б. Есакова",
                    image:
                        "https://img4.labirint.ru/rc/5cfc1f7cd94afb0bf79fa165562a283c/220x340/books59/581232/cover.jpg?1563993192",
                    price: 425,
                },
                {
                    url: "https://www.labirint.ru/books/722896/?p=30217",
                    title:
                        "ЕГЭ-2020. Информатика и ИКТ. 20 тренировочных вариантов",
                    author: "Л. Н. Евич",
                    image:
                        "https://img4.labirint.ru/rc/239cc9c594558c2f14f51bdbf2aac4a5/220x340/books73/722896/cover.jpg?1572866703",
                    price: 345,
                },
                {
                    url: "https://www.labirint.ru/books/717791/?p=30217",
                    title:
                        "ЕГЭ-2020. Информатика и ИКТ. Типовые экзаменационные варианты. 10 вариантов",
                    author: "С. С. Крылов и др.",
                    image:
                        "https://img3.labirint.ru/rc/37c7fabb79de0e25fca3debbb84ed510/220x340/books72/717791/cover.jpg?1572445568",
                    price: 311,
                },
            ],
            websites: [
                {
                    url: "https://inf-ege.sdamgia.ru",
                    title: "Решу ЕГЭ: информатика",
                    image: "https://ege.sdamgia.ru/img/headers/logo.svg",
                },
                {
                    url: "http://os.fipi.ru/tasks/5/a",
                    title: "Открытый банк заданий ФИПИ",
                    image: "http://os.fipi.ru/content/images/icon.png",
                },
                {
                    url: "https://yandex.ru/tutor/subject/?subject_id=6",
                    title: "Яндекс.Репетитор",
                    image:
                        "https://yastatic.net/s3/frontend/yandex-lego/serp-header/_/3JnAXF2i.svg",
                },
            ],
        },
    ],
};
