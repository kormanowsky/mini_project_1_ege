import React from "react";
import Card from "./Card";

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

function SubjectTask({ task, colorStyle }) {
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

export default SubjectTask;
