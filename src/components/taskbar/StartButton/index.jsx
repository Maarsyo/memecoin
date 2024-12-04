import React from 'react';
import './StartButton.css'; 
import { FaWindows } from "react-icons/fa";


function StartButton({ onClick }) {
  return (
    <div className="start-button" onClick={onClick}>
      <FaWindows />
    </div>
  );
}

export default StartButton;