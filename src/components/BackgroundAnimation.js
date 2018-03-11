import React, { PureComponent, Fragment } from 'react';
import throttle from 'lodash/throttle';
import random from 'lodash/random';
import sample from 'lodash/sample';
import styled from 'styled-components';

import PowerMode from './PowerMode';

const MIN_COLOR = 148;
const MAX_COLOR = 200;
const COLOR_STEP = 0.25;
const R = 15;
const V = 5;

const makeCircle = () => {
  const r = 10;

  const [x, y] =
    random(true) > 0.5
      ? [random(0, window.innerWidth), sample([-r / 2, window.innerHeight + r / 2])]
      : [sample([-r / 2, window.innerWidth + r / 2]), random(0, window.innerHeight)];

  return {
    x,
    y,
    r: R,
    vx: sample([-V, V]),
    vy: sample([-V, V]),
    color: random(MIN_COLOR, MAX_COLOR),
    vcolor: sample([-COLOR_STEP, COLOR_STEP])
  };
};

const Canvas = styled.canvas`
  opacity: 0.9;
`;

class BackgroundAnimation extends PureComponent {
  lastUpdate = 0;
  state = { count: 0 };
  circles = [];

  componentDidMount() {
    const { registerHandler } = this.props;
    registerHandler(this.addCircle);
    window.addEventListener('resize', throttle(this.resizeCanvas).bind(this));
    this.init();
  }

  init() {
    this.resizeCanvas();
    this.addCircle();
    requestAnimationFrame(this.animate);
  }

  addCircle = () => {
    this.circles.push(makeCircle());
    this.setState({ count: this.circles.length });
  };

  update = () => {
    this.circles.forEach(circle => {
      if (
        (circle.x - circle.r + circle.vx < 0 && circle.vx < 0) ||
        (circle.x + circle.r + circle.vx > this.canvas.width && circle.vx > 0)
      ) {
        circle.vx = -circle.vx;
      }

      if (
        (circle.y + circle.r + circle.vy > this.canvas.height && circle.vy > 0) ||
        (circle.y - circle.r + circle.vy < 0 && circle.vy < 0)
      ) {
        circle.vy = -circle.vy;
      }

      circle.x += circle.vx;
      circle.y += circle.vy;

      if (circle.color > MAX_COLOR || circle.color < MIN_COLOR) {
        circle.vcolor = -circle.vcolor;
      }

      circle.color += circle.vcolor;
    });
  };

  animate = time => {
    requestAnimationFrame(this.animate);

    if (time - this.lastUpdate >= 1000 / 60) {
      this.update();
      this.lastUpdate = time;
    }

    // this.ctx.fillStyle = 'black';
    // this.ctx.rect(0, 0, window.innerWidth, window.innerHeight);
    // this.ctx.fill();

    this.circles.forEach(circle => {
      this.ctx.fillStyle = `hsl(${circle.color}, 100%, 50%)`;
      this.ctx.beginPath();
      this.ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
      this.ctx.fill();
    });
  };

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
    const { count } = this.state;

    return (
      <Fragment>
        <Canvas innerRef={this.saveCanvasRef} onClick={this.addCircle} />
        {count >= 10 && <PowerMode count={count} />}
      </Fragment>
    );
  }
}

export default BackgroundAnimation;
