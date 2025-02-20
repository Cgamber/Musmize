import React from "react";
import Sketch from "react-p5";

const Visualizer = () => {
  let x = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.fill(255);
    p5.ellipse(x, p5.height / 2, 50, 50);
    x = (x + 1) % p5.width;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Visualizer;

