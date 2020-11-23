import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Search, VideoCall, Apps, Notifications } from "@material-ui/icons"
import { Avatar } from "@material-ui/core";
import "./Header.css";

function Header() {
    const [input, setInput] = useState('')

    return (
        <div className="header">

            <div className="header_left" >
                <Menu />
                <Link to="/">
                    <img
                        className="header_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt=""
                    />
                </Link>

            </div>

            <div className="header_center">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    placeholder="Search"
                />
                <Link to={`/search/${input}`}>
                    <Search className="header_centerButton" />
                </Link>
            </div>

            <div className="header_right">
                <VideoCall className="header_icons" />
                <Apps className="header_icons" />

                <Notifications className="header_icons" />
                <Avatar
                    alt="Rp"
                    src=""
                />
            </div>
        </div >
    )
}

export default Header
