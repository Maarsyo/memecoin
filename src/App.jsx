import React, { useState, useRef, useEffect   } from "react";
import "./App.css";
import SectionA from "./SectionA";
import Loading from "./components/Loading";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import HackerText from "./components/HackerText";
import Draggable from "./components/Draggable";
import ModelViewer from "./components/ModelViewer"
import Meme from "./components/Meme"
import Desktop from "./components/Desktop"



function App() {
 
  const getRandomPosition = (maxX, maxY) => ({
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  });
  const [windows, setWindows] = useState([
    { id: 1, title: "C:/WINDOWS/system32/cmd.exe", component: <SectionA />, minimized: false, icon: "console" },
    { id: 2, title: "Progressbar", component: <Loading />,minimized: false, icon: "progress" },
    { id: 3, title: "hacker", component: <HackerText />,minimized: false, icon: "hacker" },
    { id: 4, title: "anime", component: <ModelViewer />,minimized: false, icon: "anime" },
    { id: 5, title: "meme", component: <Meme />,minimized: false, icon: "meme" },
  ]);

  const minimizeWindow = (id) => {
    setWindows((prevWindows) =>
      prevWindows.map((win) =>
        win.id === id ? { ...win, minimized: true } : win
      )
    );
  };

  const restoreWindow = (id) => {
    setWindows((prevWindows) =>
      prevWindows.map((win) =>
        win.id === id ? { ...win, minimized: false } : win
      )
    );
  };
  const [isPlaying, setIsPlaying] = useState(false); // Estado do som
  const audioRef = useRef(null); // Referência ao elemento de áudio
  const [hasInteracted, setHasInteracted] = useState(false); // Rastrear interação inicial

  useEffect(() => {
    if (hasInteracted && isPlaying) {
      audioRef.current.volume = 0.05; 
      audioRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir música:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasInteracted]);

  const toggleSound = () => {
    if (hasInteracted) {
      setIsPlaying((prev) => !prev); // Alterna o estado de som
    }
  };

  const handleSiteClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setIsPlaying(true); // Começa a tocar após a interação inicial
    }
  };


  return (
    <div className="app-container"      onClick={handleSiteClick}>
     <audio ref={audioRef} loop>
        <source src="/bigpoppa.mp3" volumetype="audio/mpeg" />
        Seu navegador não suporta o elemento <code>audio</code>.
      </audio>
       <Draggable initialPosition={{ x : 92, y: 139 }}>
        <Window
          id={1}
          title="C:/WINDOWS/system32/cmd.exe"
          minimized={windows[0].minimized}
          onMinimize={minimizeWindow}
          onRestore={restoreWindow}
        >
          <SectionA />
        </Window>
      </Draggable>

      {/* Segunda Janela */}
      <Draggable initialPosition={{ x: 850, y: 100 }}>
        <Window
          id={2}
          title="Progress Bar"
          minimized={windows[1].minimized}
          onMinimize={minimizeWindow}
          onRestore={restoreWindow}
        >
          <Loading />
        </Window>
      </Draggable>
      <Draggable initialPosition={{ x: 381, y: 650}}> 
        <Window
          id={3}
          title="hacker"
          minimized={windows[2].minimized}
          onMinimize={minimizeWindow}
          onRestore={restoreWindow}
        >
          <HackerText />
        </Window>
      </Draggable>
      <Draggable initialPosition={{ x: 1400, y: 185}}>
        <Window
          id={4}
          title="ur girl"
          minimized={windows[3].minimized}
          onMinimize={minimizeWindow}
          onRestore={restoreWindow}
        >
          <ModelViewer />
        </Window>
      </Draggable>
      <Draggable initialPosition={{ x: 800, y: 500}}>
        <Window
          id={5}
          title="meme"
          minimized={windows[3].minimized}
          onMinimize={minimizeWindow}
          onRestore={restoreWindow}
        >
          <Meme />
        </Window>
      </Draggable>
      <Desktop />
      <Taskbar isPlaying={isPlaying} toggleSound={toggleSound}  windows={windows} onRestore={restoreWindow} />
    </div>
  );
}

export default App;
