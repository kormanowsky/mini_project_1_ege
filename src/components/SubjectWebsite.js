import React from "react";
import Card from "./Card";

function SubjectWebsite({ website, colorStyle }) {
    return (
        <div class="subject-website col-xs-12 col-md-6 col-lg-4">
            <a
                href={website.url}
                target="_blank"
                rel="noreferrer noopener"
                style={colorStyle}
            >
                <Card
                    content={
                        <img
                            class="subject-website-image"
                            src={website.image}
                            alt={website.title}
                        />
                    }
                    className="subject-website-image-card"
                    shadow="nm"
                ></Card>
                <p class="subject-website-title">{website.title}</p>
                <p class="subject-website-url">
                    {website.url.split("://")[1].split("/")[0]}
                </p>
            </a>
        </div>
    );
}

export default SubjectWebsite;
