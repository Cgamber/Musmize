import React from "react";
import MusicPlayer from "./components/MusicPlayer";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      <h1 className="text-white text-4xl my-4">AI Music Visualizer</h1>
      <MusicPlayer />
      <Visualizer />
    </div>
  );
}

export default App;

