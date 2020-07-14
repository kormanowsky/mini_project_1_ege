import React from "react";
import Data from "./data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SubjectPage, HomePage } from "./pages";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                {Data.subjects.map((subject) => (
                    <Route path={subject.url}>
                        <SubjectPage subject={subject} key={subject.name} />
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
