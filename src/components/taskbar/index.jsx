import React from "react";
import TaskbarIcon from "./TaskbarIcon";
import StartButton from "./StartButton";
import Icon from "./Icon";
import "./Taskbar.css";
import { FaXTwitter } from "react-icons/fa6";
import { TbPrompt } from "react-icons/tb";
import { GiKingJuMask } from "react-icons/gi";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { GiLipstick } from "react-icons/gi";
import { IoMdImage } from "react-icons/io";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { MdOutlineNetworkLocked } from "react-icons/md";


const Taskbar = ({ isPlaying, toggleSound, windows, onRestore }) => {
  return (
    <div className="taskbar">
      <StartButton />
      <div className="taskbar-icons">
        {windows.map((win) => (
          
          <TaskbarIcon
            key={win.id}
            id={win.id}
            icon={win.icon === "console" ? (
              <TbPrompt />
            ) : win.icon === "hacker" ? (
              <GiKingJuMask />
            ) : win.icon === "anime" ? (
              <GiLipstick  />
            ) : win.icon === "meme" ? (
              <IoMdImage  />
            ): (
              <FaXTwitter />
            ) }
            isActive={!win.minimized} // Verifica se a aba está ativa
            onRestore={onRestore}
          />
        ))}
      </div>
      <div className="system-tray">
        <MdOutlineNetworkLocked />

        <div className="item" onClick={toggleSound}>
          {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
