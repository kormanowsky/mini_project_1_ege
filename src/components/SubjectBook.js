import React from "react";
import Card from "./Card";

function SubjectBook({ book }) {
    return (
        <div class="subject-book col-xs-12 col-md-6">
            <div class="row">
                <div class="col-xs-6">
                    <Card
                        className="subject-book-image"
                        shadow="nm"
                        content={<img src={book.image} alt={book.title}></img>}
                    />
                </div>
                <div class="col-xs-6">
                    <p class="subject-book-title">{book.title}</p>
                    <p class="subject-book-author">{book.author}</p>
                    <a
                        class="subject-book-buy-link"
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {book.price} <i class="icofont-rouble"></i>
                        <i class="icofont-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SubjectBook;
