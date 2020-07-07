import React from "react";
import Constants from "./constants";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Card({ id, content }) {
    return (
        <div className="block block-card" id={id}>
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

function SubjectPage({ subject }) {
    return (
        <div class="app app-subject">
            <header id="subject-header">
                <div class="container" id="subject-header-conteiner">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <p id="breadcrumbs">
                                <Link to="/">Главная</Link>&nbsp;>&nbsp;
                                <span>{subject.name}</span>
                            </p>
                            <h1>{subject.name}</h1>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div id="subject-header-right">Something here</div>
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
                            ></Card>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <Card content="Main Info about the subject"></Card>
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
