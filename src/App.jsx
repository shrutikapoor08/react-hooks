import React, { useRef, useState } from "react";
import "./App.css";
import { Play, Pause } from "lucide-react";

import Video from "./Video";

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="App">
      <h1> Understanding Refs</h1>
      <div>
        <Video videoRef={videoRef} />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
