import React from "react";
import "./TaskbarIcon.css";

const TaskbarIcon = ({ id, title, icon, isActive, onRestore }) => {
  return (
    <div
      className={`taskbar-icon ${isActive ? "active" : ""}`}
      onClick={() => onRestore(id)}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default TaskbarIcon;
