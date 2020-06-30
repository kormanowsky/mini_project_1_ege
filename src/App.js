import React from "react";
import Constants from "./constants";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HomeSubject({ subject }) {
    return (
        <div className="block block-home-subject">
            <Link to={subject.url}>
                <i className={subject.icon}></i>
                <p>{subject.name}</p>
            </Link>
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

function SubjectPage(props) {
    const subject = props.subject;
    return <p>{subject.name}</p>;
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
