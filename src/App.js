import React from "react";
import Constants from "./constants";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Card({ content }) {
    return <div className="block block-card">{content}</div>;
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

function SubjectPage({ subject }) {
    return (
        <div class="app app-subject">
            <header id="subject-header">
                <div id="subject-header-left">
                    <p id="breadcrumbs">
                        <Link to="/">Главная</Link>&nbsp;>&nbsp;
                        <span>{subject.name}</span>
                    </p>
                    <h1>{subject.name}</h1>
                </div>
                <div id="subject-header-right">Something here</div>
            </header>
            <main id="subject-main">
                <Card content="Main Info about the subject"></Card>
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
