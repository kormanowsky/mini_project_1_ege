import React from "react";
import { useEffect } from "react";
import Constants from "./constants";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chart from "chart.js";

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

function HomeSubject({ subject }) {
    return (
        <div className="block block-home-subject">
            <Card
                content={
                    <Link to={subject.url}>
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

                <p>
                    Made by{" "}
                    <a
                        href="https://vk.com/kormanowsky/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mikhail Kormanowsky
                    </a>{" "}
                    using IcoFont icons and Google Fonts.
                </p>
            </div>
        </div>
    );
}

function SubjectTask({ task, colorStyle }) {
    return (
        <Card
            className="subject-task-card"
            content={
                <div class="container">
                    <div class="row">
                        <div class="col subject-task-number" style={colorStyle}>
                            {task.number}
                        </div>
                        <div class="col subject-task-theme">{task.theme}</div>
                        <div class="col subject-task-points">{task.points}</div>
                    </div>
                </div>
            }
            shadow="nm"
        ></Card>
    );
}

function SubjectPage({ subject }) {
    const subjectColorStyle = { color: subject.color },
        subjectBgStyle = { background: subject.color };

    useEffect(() => {
        let chart = new Chart("subject-chart", {
            type: "line",
            data: {
                labels: subject.averagePoints.labels,
                datasets: [
                    {
                        label: "Cредний балл по России",
                        data: subject.averagePoints.values,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        color: "rgba(255, 255, 255, 0.7)",
                    },
                ],
            },
            options: {
                layout: {
                    padding: 0,
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                display: false,
                            },
                        },
                    ],
                },
                elements: {
                    point: {
                        radius: 8,
                    },
                },
            },
        });
    });
    return (
        <div class="app app-subject">
            <header id="subject-header" style={subjectBgStyle}>
                <div class="container" id="subject-header-container">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p id="breadcrumbs">
                                <Link to="/">Главная</Link>&nbsp;
                                <i class="icofont-long-arrow-right"></i>&nbsp;
                                <span>{subject.name}</span>
                            </p>
                            <h1 id="subject-name">{subject.name}</h1>
                        </div>
                        <div class="col-xs-12 col-md-5 col-md-offset-1">
                            <canvas id="subject-chart"></canvas>
                        </div>
                    </div>
                </div>
            </header>
            <main id="subject-main">
                <div class="container" id="subject-main-container">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <Card
                                id="subject-main-info-card"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id interdum velit laoreet id donec. Ut eu sem integer vitae justo eget magna. Ornare suspendisse sed nisi lacus sed viverra tellus in. Sit amet porttitor eget dolor morbi non arcu risus. Sollicitudin ac orci phasellus egestas. Massa massa ultricies mi quis hendrerit. At varius vel pharetra vel turpis. Elementum sagittis vitae et leo. A diam sollicitudin tempor id eu nisl nunc. Pretium nibh ipsum consequat nisl vel pretium lectus quam. In massa tempor nec feugiat nisl pretium fusce id velit. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Condimentum id venenatis a condimentum vitae sapien pellentesque. Sed enim ut sem viverra aliquet eget sit amet tellus."
                                shadow="lg"
                            ></Card>
                            {subject.tasks ? (
                                <div class="subject-rubric">
                                    <h2
                                        class="subject-rubric-title"
                                        style={subjectColorStyle}
                                    >
                                        Задания
                                    </h2>
                                    {subject.tasks.map((task) => (
                                        <SubjectTask
                                            task={task}
                                            colorStyle={subjectColorStyle}
                                        />
                                    ))}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                        <div class="col-xs-12 col-md-offset-1 col-md-5">
                            <h2
                                class="subject-rubric-title"
                                style={subjectColorStyle}
                            >
                                Что читать
                            </h2>
                        </div>
                    </div>
                </div>
            </main>
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
