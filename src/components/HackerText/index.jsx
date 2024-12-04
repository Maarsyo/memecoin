import React, { useEffect, useState } from "react";
import "./HackerText.css";

const generateRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

const generateRandomLine = (length) => {
  return Array.from({ length }, () => generateRandomChar()).join("");
};

const HackerText = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) => {
        const newLine = generateRandomLine(40); // Comprimento da linha
        return [...prevLines.slice(-30), newLine]; // Limita a 30 linhas
      });
    }, 100); // Tempo entre as novas linhas

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hacker-text">
      {lines.map((line, index) => (
        <pre key={index} className="hacker-line">
          {line}
        </pre>
      ))}
    </div>
  );
};

export default HackerText;
