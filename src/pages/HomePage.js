import React from "react";
import { HomeSubject, Footer } from "../components";
import Data from "../data";

function HomePage() {
    return (
        <div className="app app-home">
            <div>
                <h1>{Data.projectInfo.name}</h1>
                <h4>{Data.projectInfo.description}</h4>

                <div id="home-subjects">
                    {Data.subjects.map((subject) => (
                        <HomeSubject subject={subject} key={subject.name} />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
