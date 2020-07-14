import React from "react";

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

export default Card;
