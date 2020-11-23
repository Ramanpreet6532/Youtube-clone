import React from 'react';
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";

function ChannelRow({ image, channel, subs, noOfVideos, description, verified }) {
    return (
        <div className="channelRow">
            <Avatar
                className="channelRow_logo"
                src={image}
                alt={channel}
            />
            <div className="channelRow_text">
                <h4>{channel} {verified && <CheckCircleOutline />}</h4>
                <p>{subs} Subscribers ⚫ {noOfVideos} Videos </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
