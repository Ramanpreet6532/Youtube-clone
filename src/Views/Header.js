import React, { useState } from 'react'
import { Menu, Search, VideoCall, Apps, Notifications } from "@material-ui/icons"
import { Avatar } from "@material-ui/core";
import "./Header.css"

function Header() {
    return (
        <div className="header">

            <div className="header_left" >
                <Menu />
                <img
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt=""
                />
            </div>

            <div className="header_center">
                <input type="text" placeholder="Search" />
                <Search className="header_centerButton" />
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
        </div>
    )
}

export default Header
