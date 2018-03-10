import React, { PureComponent } from 'react';
import throttle from 'lodash/throttle';
import random from 'lodash/random';
import sample from 'lodash/sample';

class BackgroundAnimation extends PureComponent {
  circle = {
    x: random(0, window.innerWidth),
    y: random(0, window.innerHeight),
    r: 10,
    vx: sample([-4, 4]),
    vy: sample([-4, 4]),
    color: 125
  };

  componentDidMount() {
    window.addEventListener('resize', throttle(this.resizeCanvas).bind(this));
    this.init();
  }

  animate = () => {
    const { canvas, circle, ctx } = this;

    ctx.fillStyle = 'hsl(' + circle.color++ + ', 100%, 50%)';
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
    ctx.fill();

    if (circle.x - circle.r + circle.vx < 0 || circle.x + circle.r + circle.vx > 0 + canvas.width) {
      circle.vx = -circle.vx;
    }

    if (circle.y + circle.r + circle.vy > 0 + canvas.height || circle.y - circle.r + circle.vy < 0) {
      circle.vy = -circle.vy;
    }

    circle.x += circle.vx;
    circle.y += circle.vy;

    requestAnimationFrame(this.animate);
  };

  init() {
    this.resizeCanvas();
    requestAnimationFrame(this.animate);
  }

  resizeCanvas() {
    const { innerWidth, innerHeight } = window;
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
  }

  saveCanvasRef = (canvas: HTMLCanvasElement) => {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  };

  render() {
    return <canvas ref={this.saveCanvasRef} />;
  }
}

export default BackgroundAnimation;
