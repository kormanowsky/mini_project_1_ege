import React from "react";
import { useEffect } from "react";
import Constants from "./constants";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Card({ id, content, className, shadow }) {
    if (!className) {
        className = "";
    } else {
        className += " ";
    }
    className += "block block-card";
    if (shadow === "nm") {
        className += " has-shadow";
    } else if (shadow === "lg") {
        className += " has-lg-shadow";
    }
    return (
        <div className={className} id={id}>
            {content}
        </div>
    );
}

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
                Используются ReactJS, иконки IcoFont, шрифты Google Fonts и
                сетка Flexbox Grid.
            </p>
        </footer>
    );
}

function HomeSubject({ subject }) {
    return (
        <div className="block block-home-subject">
            <Card
                className="has-lg-shadow"
                content={
                    <Link to={subject.url} style={{ color: subject.color }}>
                        <i className={subject.icon}></i>
                        <p>{subject.name}</p>
                    </Link>
                }
            ></Card>
        </div>
    );
}

function HomePage() {
    return (
        <div className="app app-home">
            <div>
                <h1>{Constants.projectInfo.name}</h1>
                <h4>{Constants.projectInfo.description}</h4>

                <div id="home-subjects">
                    {Constants.subjects.map((subject) => (
                        <HomeSubject subject={subject} key={subject.name} />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}

function SubjectTask({ task, colorStyle }) {
    function getPointsLabel(pointsCount) {
        if (11 <= pointsCount % 100 && pointsCount % 100 <= 14) {
            return `${pointsCount} баллов`;
        } else if (pointsCount % 10 === 1) {
            return `${pointsCount} балл`;
        } else if (2 <= pointsCount % 10 && pointsCount % 10 <= 4) {
            return `${pointsCount} балла`;
        } else {
            return `${pointsCount} баллов`;
        }
    }
    return (
        <div class="col-xs-12 col-md-6 col-lg-4">
            <Card
                className="subject-task-card"
                content={
                    <div class="container">
                        <div class="row">
                            <div
                                class="col subject-task-number"
                                style={colorStyle}
                            >
                                {task.number}
                            </div>

                            <div class="col subject-task-points">
                                {getPointsLabel(task.points)}
                            </div>
                        </div>
                        <div class="col subject-task-theme">{task.theme}</div>
                    </div>
                }
                shadow="nm"
            ></Card>
        </div>
    );
}

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

function SubjectChart({ chartData, title }) {
    const id = "subject-chart";
    useEffect(() => {
        let chartSvg = document.getElementById(id),
            chartOuter = chartSvg.parentElement,
            { labels, values } = chartData,
            width = chartOuter.offsetWidth,
            height = 200,
            safeZonePercent = 30,
            minValue = Math.min(...values),
            maxValue = Math.max(...values);

        function valueToYCoord(value) {
            return (
                (((height * (100 - safeZonePercent)) / 100) *
                    (maxValue - value)) /
                (maxValue - minValue)
            );
        }

        function indexToXCoord(index) {
            return (index / (values.length - 1)) * width;
        }

        let d = `M ${indexToXCoord(0)} ${valueToYCoord(
            values[0]
        )} L 0 ${height} L ${width} ${height}`;

        for (let index = values.length - 1; index >= 0; --index) {
            let value = values[index],
                valuePoint = document.createElement("div"),
                valueLabel = document.createElement("div");
            d += ` L ${indexToXCoord(index)} ${valueToYCoord(value)}`;
            valuePoint.className = "subject-chart-point has-lg-shadow";
            valuePoint.style.top = valueToYCoord(value) + "px";
            valuePoint.style.left = indexToXCoord(index) + "px";
            valueLabel.className = "subject-chart-label";
            valueLabel.innerHTML = `<b>${value}</b><br/><small>${labels[index]}</small>`;
            valueLabel.style.top = valueToYCoord(value) + "px";
            valueLabel.style.left = indexToXCoord(index) + "px";
            chartOuter.appendChild(valuePoint);
            chartOuter.appendChild(valueLabel);
        }

        chartSvg.setAttribute("width", width);
        chartSvg.setAttribute("height", height);
        chartSvg.querySelector("path").setAttribute("d", d);
    });

    return (
        <div id="subject-chart-outer">
            <svg id={id}>
                <path fill="rgba(0,0,0,.18)"></path>
            </svg>
            {title ? <h3 class="subject-chart-title">{title}</h3> : null}
        </div>
    );
}

function SubjectChannel({ channel, colorStyle }) {
    return (
        <div class="subject-channel col-12 col-md-6 col-lg-4">
            <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                style={colorStyle}
            >
                <div class="row">
                    <div class="col-xs-4">
                        <img
                            src={channel.image}
                            class="subject-channel-image has-lg-shadow"
                            alt={channel.title}
                        />
                    </div>
                    <div class="col-xs-8">
                        <p class="subject-channel-title">{channel.title}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

function SubjectWebsite({ website, colorStyle }) {
    return (
        <div class="col-xs-12 col-md-6 col-lg-4">
            <a
                href={website.url}
                target="_blank"
                rel="noreferrer noopener"
                style={colorStyle}
            >
                <Card
                    content={
                        <img
                            class="subject-website-image"
                            src={website.image}
                            alt={website.title}
                        />
                    }
                    className="subject-website-image-card"
                    shadow="nm"
                ></Card>
                <p class="subject-website-title">{website.title}</p>
                <p class="subject-website-url">
                    {website.url.split("://")[1].split("/")[0]}
                </p>
            </a>
        </div>
    );
}

function SubjectPage({ subject }) {
    const subjectColorStyle = { color: subject.color },
        subjectBgStyle = { background: subject.color };
    return (
        <div class="app app-subject">
            <header id="subject-header" style={subjectBgStyle}>
                <div class="container" id="subject-header-container">
                    <h1 id="project-name">{Constants.projectInfo.name}</h1>
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
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id interdum velit laoreet id donec. Ut eu sem integer vitae justo eget magna. Ornare suspendisse sed nisi lacus sed viverra tellus in. Sit amet porttitor eget dolor morbi non arcu risus. Sollicitudin ac orci phasellus egestas. Massa massa ultricies mi quis hendrerit. At varius vel pharetra vel turpis. Elementum sagittis vitae et leo. A diam sollicitudin tempor id eu nisl nunc. Pretium nibh ipsum consequat nisl vel pretium lectus quam. In massa tempor nec feugiat nisl pretium fusce id velit. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque. Sed enim ut sem viverra aliquet eget sit amet tellus."
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
                                    {subject.books
                                        ? subject.books
                                              .sort(() =>
                                                  Math.random() < 0.5 ? -1 : 1
                                              )
                                              .map((book) => (
                                                  <SubjectBook book={book} />
                                              ))
                                        : ""}
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
                                    {subject.channels
                                        ? subject.channels
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
                                        : ""}
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
                                    {subject.websites
                                        ? subject.websites
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
                                        : ""}
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

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                {Constants.subjects.map((subject) => (
                    <Route path={subject.url}>
                        <SubjectPage subject={subject} key={subject.name} />
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
