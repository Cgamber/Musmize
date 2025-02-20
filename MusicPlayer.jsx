import React from "react";
import * as Tone from "tone";

function MusicPlayer() {
  const playSound = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  };

  return (
    <div>
      <button
        onClick={playSound}
        className="p-3 bg-green-500 rounded text-white mt-4"
      >
        Play Sound
      </button>
    </div>
  );
}

export default MusicPlayer;
