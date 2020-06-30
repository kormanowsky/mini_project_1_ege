import React from "react";
import Constants from "./constants";
import "./App.css";

function App() {
    return (
        <div className="app app-home">
            <div>
                <h1>{Constants.projectInfo.name}</h1>
                <h4>{Constants.projectInfo.description}</h4>
                <p>Made by <a href="https://vk.com/kormanowsky/" target="_blank" rel="noopener noreferrer">Mikhail Kormanowsky</a> using IcoFont icons and Google Fonts.</p>
            </div>
        </div>
    );
}

export default App;
