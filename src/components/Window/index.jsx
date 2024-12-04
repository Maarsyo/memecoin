import React, { useState } from "react";
import "./Window.css";
import { CiClock1 } from "react-icons/ci";
import { FaRegWindowMinimize } from "react-icons/fa";
import { TbPrompt } from "react-icons/tb";
import { GiKingJuMask } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { IoMdImage } from "react-icons/io";
const Window = ({ id, title, icon, minimized, onMinimize, children }) => {

  return (
    <div className={`window ${minimized ? "hidden" : ""}`}>

      <div className="window-header">
        <div className="left">
          {title === "C:/WINDOWS/system32/cmd.exe" ? (
            <TbPrompt />
          ) : title === "hacker" ? (
            <GiKingJuMask />
          ) : title === "ur girl" ? (
            <GiLipstick />
          ) : title === "meme" ? (
            <IoMdImage />
          ): (
            <CiClock1 />
          )}
          <h1>{title}</h1>
        </div>
        <div className="right">
          <button
            className="console-header-button minimize"
            onClick={() => onMinimize(id)}
          >
            <FaRegWindowMinimize />

          </button>
        </div>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
