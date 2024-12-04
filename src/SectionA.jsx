import React, { useState, useEffect, useRef } from "react";
import "./SectionA.css";

const typingSound = new Audio("/ddddddddd.mp3"); // Ajuste o caminho conforme necessário
typingSound.volume = 0.05;

function SectionA() {
  const fakeLines = [
    "Microsoft Windows [Version 11.0.19045.5131",
    "Microsoft Corporation. All rights reserved.",
    "C:/Users/pump.fun>npm install website",
    "C:/Users/pump.fun>npm installing packages...",
    "C:/Users/pump.fun>n- style v9.9.9 installed.",
    "C:/Users/pump.fun>n- markup v0.1.0 installed.",
    "C:/Users/pump.fun>n- scripts v9.9.9 installed.",
    "C:/Users/pump.fun>n- 10 billion dependencies installed.",
    "C:/Users/pump.fun>Make website responsive? (yes/no)",
    "C:/Users/pump.fun>yes, pump it.",
    "C:/Users/pump.fun>Make website accessible? (yes/no)",
    "C:/Users/pump.fun>yes, just do it.",
    "C:/Users/pump.fun>Finalizing...",
    "C:/Users/pump.fun>Website complete! Wasn't that easy?",
    "C:/Users/pump.fun>Now next stop is the moon.",
  ];

  const lineDelays = [100, 100, 500, 500, 200, 200, 200, 500, 800, 1000, 800, 1000, 200, 200, 200];
  const typingSpeeds = Array(fakeLines.length).fill(100); // Define a mesma velocidade para todas as linhas
  const lineSounds = Array(fakeLines.length).fill(true); // Habilita sons para todas as linhas

  const [displayedText, setDisplayedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showFinalCursor, setShowFinalCursor] = useState(false);

  const consoleRef = useRef(null);
  // Inicia a digitação ao carregar a página
  useEffect(() => {
    const startTyping = () => {
      setDisplayedText("");
      setCurrentLine(0);
      setCurrentChar(0);
    };

    startTyping();
  }, []);

  // Controle de digitação
  useEffect(() => {
    if (currentLine < fakeLines.length) {
      const line = fakeLines[currentLine];

      if (currentChar < line.length) {
        const typingInterval = setInterval(() => {
          setDisplayedText((prevText) => prevText + line[currentChar]);
          setCurrentChar((prevChar) => prevChar + 1);

          if (lineSounds[currentLine]) {
            typingSound.play().catch((error) => {
              console.error("Erro ao tocar som:", error);
            });
          }
        }, typingSpeeds[currentLine]);

        return () => clearInterval(typingInterval);
      } else {
        if (lineSounds[currentLine]) {
          typingSound.pause();
          typingSound.currentTime = 0; // Reinicia o som
        }

        const lineBreakInterval = setTimeout(() => {
          setDisplayedText((prevText) => prevText + "\n");
          setCurrentLine((prevLine) => prevLine + 1);
          setCurrentChar(0);

          if (currentLine + 1 === fakeLines.length) {
            setShowFinalCursor(true);
          }
        }, lineDelays[currentLine]);

        return () => clearTimeout(lineBreakInterval);
      }
    } else {
      typingSound.pause();
    }
  }, [currentLine, currentChar]);

  return (
    <div className="container">
      <div className="console" ref={consoleRef}>
        <div className="console-main">
          <pre>{displayedText}</pre>
          {/* Exibe o cursor enquanto digita */}
          {currentLine < fakeLines.length && (
            <span className="cursor"></span>
          )}
          {/* Exibe o cursor final após a conclusão */}
          {showFinalCursor && <span className="cursor"></span>}
        </div>
      </div>
    </div>
  );
}

export default SectionA;
