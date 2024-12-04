import React from "react";
import "./Desktop.css";
import DesktopIcon from "./DesktopIcon";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { CiPill } from "react-icons/ci";


const Desktop = () => {
    return (
        <div className="desktop">
            <div className="desktop-container">
                <DesktopIcon
                    icon={<FaTelegramPlane />}
                    title="Telegram"
                    link="https://twitter.com/"
                />
                <DesktopIcon
                    icon={<CiPill />}
                    title="pump.fun"
                    link="https://twitter.com/"
                />
                <DesktopIcon
                    icon={<FaXTwitter />}
                    title="Twitter"
                    link="https://twitter.com/"
                />
            </div>
        </div>
    );
};

export default Desktop;