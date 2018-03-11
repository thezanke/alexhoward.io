import React, { PureComponent, Fragment } from 'react';
import throttle from 'lodash/throttle';
import random from 'lodash/random';
import sample from 'lodash/sample';
import styled from 'styled-components';

import PowerMode from './PowerMode';

const MIN_COLOR = 145;
const MAX_COLOR = 215;
const COLOR_STEP = 0.5;

const makeCircle = () => {
  const r = 10;

  const [x, y] =
    random(true) > 0.5
      ? [random(0, window.innerWidth), sample([-r / 2, window.innerHeight + r / 2])]
      : [sample([-r / 2, window.innerWidth + r / 2]), random(0, window.innerHeight)];

  return {
    x,
    y,
    r: 10,
    vx: sample([-3, 3]),
    vy: sample([-3, 3]),
    color: random(MIN_COLOR, MAX_COLOR),
    vcolor: sample([-COLOR_STEP, COLOR_STEP])
  };
};

const Canvas = styled.canvas`
  opacity: 0.6;
`;

class BackgroundAnimation extends PureComponent {
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

  animate = () => {
    const { canvas, circles, ctx } = this;

    circles.forEach(circle => {
      ctx.fillStyle = `hsl(${circle.color}, 100%, 50%)`;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
      ctx.fill();

      if (
        (circle.x - circle.r + circle.vx < 0 && circle.vx < 0) ||
        (circle.x + circle.r + circle.vx > canvas.width && circle.vx > 0)
      ) {
        circle.vx = -circle.vx;
      }

      if (
        (circle.y + circle.r + circle.vy > canvas.height && circle.vy > 0) ||
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

    requestAnimationFrame(this.animate);
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
