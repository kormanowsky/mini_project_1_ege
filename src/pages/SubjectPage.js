import React from "react";
import { Link } from "react-router-dom";
import {
    SubjectBook,
    SubjectChannel,
    SubjectChart,
    SubjectTask,
    SubjectWebsite,
    Card,
    Footer,
} from "../components";
import Data from "../data";

function SubjectPage({ subject }) {
    const subjectColorStyle = { color: subject.color },
        subjectBgStyle = { background: subject.color };
    return (
        <div class="app app-subject">
            <header id="subject-header" style={subjectBgStyle}>
                <div class="container" id="subject-header-container">
                    <h1 id="project-name">{Data.projectInfo.name}</h1>
                    <p id="breadcrumbs">
                        <Link to="/">Главная</Link>&nbsp;
                        <i class="icofont-long-arrow-right"></i>&nbsp;
                        <span>{subject.name}</span>
                    </p>
                    <div class="row">
                        <div class="col-xs-12 col-md-5">
                            <h1 id="subject-name">{subject.name}</h1>
                        </div>
                        <div class="col-xs-12 col-md-6 col-md-offset-1">
                            <SubjectChart
                                chartData={subject.averagePoints}
                                title="Средний балл"
                            ></SubjectChart>
                        </div>
                    </div>
                </div>
            </header>
            <main id="subject-main">
                <div class="container" id="subject-main-container">
                    <div class="row">
                        <div class="col-xs-12 col-md-5">
                            <Card
                                id="subject-main-info-card"
                                content={subject.mainInfo}
                                shadow="lg"
                            ></Card>

                            {subject.tasks ? (
                                <div class="subject-rubric" id="subject-tasks">
                                    <h2
                                        class="subject-rubric-title"
                                        style={subjectColorStyle}
                                    >
                                        Задания
                                    </h2>
                                    <div class="row">
                                        {subject.tasks.map((task) => (
                                            <SubjectTask
                                                task={task}
                                                colorStyle={subjectColorStyle}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div class="col-xs-12 col-md-offset-1 col-md-6">
                            <div id="subject-books">
                                <h2
                                    class="subject-rubric-title"
                                    style={subjectColorStyle}
                                >
                                    Что читать
                                </h2>
                                <div class="row">
                                    {subject.books ? (
                                        subject.books
                                            .sort(() =>
                                                Math.random() < 0.5 ? -1 : 1
                                            )
                                            .map((book) => (
                                                <SubjectBook book={book} />
                                            ))
                                    ) : (
                                        <p class="no-info">
                                            Пока нет информации о хороших книгах
                                            по этому предмету. Если Вы знаете
                                            такие книги, напишите на почту:{" "}
                                            <a
                                                href="mailto:kormanowsky@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                kormanowsky@gmail.com
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div id="subject-channels">
                                <h2
                                    class="subject-rubric-title"
                                    style={subjectColorStyle}
                                >
                                    Что смотреть
                                </h2>
                                <div class="row">
                                    {subject.channels ? (
                                        subject.channels
                                            .sort(() =>
                                                Math.random() < 0.5 ? -1 : 1
                                            )
                                            .map((channel) => (
                                                <SubjectChannel
                                                    channel={channel}
                                                    colorStyle={
                                                        subjectColorStyle
                                                    }
                                                />
                                            ))
                                    ) : (
                                        <p class="no-info">
                                            Пока нет информации о хороших
                                            каналах по этому предмету. Если Вы
                                            знаете такие каналы, напишите на
                                            почту:{" "}
                                            <a
                                                href="mailto:kormanowsky@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                kormanowsky@gmail.com
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div id="subject-channels">
                                <h2
                                    class="subject-rubric-title"
                                    style={subjectColorStyle}
                                >
                                    Что решать
                                </h2>
                                <div class="row">
                                    {subject.websites ? (
                                        subject.websites
                                            .sort(() =>
                                                Math.random() < 0.5 ? -1 : 1
                                            )
                                            .map((website) => (
                                                <SubjectWebsite
                                                    website={website}
                                                    colorStyle={
                                                        subjectColorStyle
                                                    }
                                                />
                                            ))
                                    ) : (
                                        <p class="no-info">
                                            Пока нет информации о хороших сайтах
                                            по этому предмету. Если Вы знаете
                                            такие сайты, напишите на почту:{" "}
                                            <a
                                                href="mailto:kormanowsky@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                kormanowsky@gmail.com
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default SubjectPage;
