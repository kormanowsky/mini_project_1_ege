import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
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

export default HomeSubject;
