import React from 'react';
import "./VideoRow.css";

function VideoRow({ image, channel, subs, timestamp, description, views, title }) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow_text">
                <h4>{title}</h4>
                <p className="videoRow_headline">{channel} ⚫
                <span className="videoRow_subs">
                        <span className="videoRow_subsNumber">{subs} </span>
                    Subscribers
                    </span>{" "}
                    {views} Views ⚫ {timestamp}
                </p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
