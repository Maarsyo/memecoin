import React from "react";
import "./DesktopIcon.css";

const DesktopIcon = ({ icon, title, link }) => {
  const handleDoubleClick = () => {
    if (link) {
      window.open(link, "_blank"); // Abre o link em uma nova aba
    }
  };

  return (
    <div className="desktop-icon" onDoubleClick={handleDoubleClick}>
      <div className="icon">{icon}</div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default DesktopIcon;