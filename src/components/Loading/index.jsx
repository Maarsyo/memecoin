import React, { useState, useEffect } from "react";
import "./Loading.css";
import { CiClock1 } from "react-icons/ci";
import { FaRegWindowMinimize } from "react-icons/fa";

const Loading = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 1
        );
      }, 550); // 1800ms para cada incremento (100% em 3 minutos)
  
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="progress-window">
           
            <div className="main">
                <h2>Deleting 1 item from <span>pump.fun</span></h2>
                <div className="center">
                    <div className="left-content">
                        <h1>{progress}% complete</h1>
                    </div>
                    <div className="right-content">
                        <button className="pause-button">| |</button>
                        <button className="cancel-button">✖</button>
                    </div>
                </div>
                <div class="progress-bar-container">
                <div class="progress-fill"
                style={{ width: `${progress}%` }}></div>
            </div>
            </div>
           
        </div>
    );
};

export default Loading;