import React from "react";

function Footer() {
    return (
        <footer>
            <p>
                Автор сайта -{" "}
                <a
                    href="https://vk.com/kormanowsky/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Михаил Кормановский
                </a>
                .
            </p>
            <p>
                Используются ReactJS, иконки IcoFont, шрифты Google Fonts, сетка
                Flexbox Grid,
                <br />
                материалы сайтов rg.ru, sdamgia.ru, labirint.ru и личный опыт.
            </p>
        </footer>
    );
}

export default Footer;