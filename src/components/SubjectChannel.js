import React from "react";

function SubjectChannel({ channel, colorStyle }) {
    return (
        <div class="subject-channel col-sm-12 col-md-6 col-lg-4">
            <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                style={colorStyle}
            >
                <div class="row">
                    <div class="col-xs-4">
                        <img
                            src={channel.image}
                            class="subject-channel-image has-lg-shadow"
                            alt={channel.title}
                        />
                    </div>
                    <div class="col-xs-8">
                        <p class="subject-channel-title">{channel.title}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default SubjectChannel;
