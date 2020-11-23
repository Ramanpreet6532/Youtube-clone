import React from 'react';
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlined />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                channel="Youtube"
                verified
                subs="80K"
                noOfVideos={677}
                description="You can find youtube related new updated, features videos here"
            />

            <hr />

            <VideoRow
                views="80k"
                subs="67k"
                description="Get latest updates and how to use them here"
                timestamp="3 days ago"
                channel="React"
                title="Features of React"
                image="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            />

            <VideoRow
                views="80k"
                subs="67k"
                description="Get latest updates and how to use them here"
                timestamp="3 days ago"
                channel="React"
                title="Features of React"
                image="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            />

            <VideoRow
                views="80k"
                subs="67k"
                description="Get latest updates and how to use them here"
                timestamp="3 days ago"
                channel="React"
                title="Features of React"
                image="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            />

            <VideoRow
                views="80k"
                subs="67k"
                description="Get latest updates and how to use them here"
                timestamp="3 days ago"
                channel="React"
                title="Features of React"
                image="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            />
        </div>
    )
}

export default SearchPage
