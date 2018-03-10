import React, { PureComponent } from 'react';
import throttle from 'lodash/throttle';

import generateMaze from '../lib/generate-maze';

class Maze extends PureComponent {
  componentDidMount() {
    window.addEventListener('resize', throttle(this.resizeCanvas).bind(this));

    this.resizeCanvas();
    generateMaze(this.canvas);
  }

  resizeCanvas() {
    const { innerWidth, innerHeight } = window;
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
  }

  saveCanvasRef = (canvas: HTMLCanvasElement) => {
    this.canvas = canvas;
  };

  render() {
    return <canvas ref={this.saveCanvasRef} />;
  }
}

export default Maze;
