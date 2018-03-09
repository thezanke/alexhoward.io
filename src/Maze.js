import React, { PureComponent } from 'react';
import styled from 'styled-components';

import generateMaze from './lib/generate-maze';

const MazeContainer = styled.canvas`
  background-color: #555555;
  border: 2px solid #333333;
  height: 50vw;
  width: 50vw;
`;

class Maze extends PureComponent {
  componentDidMount() {
    generateMaze(this.canvas);
  }
  render() {
    return <MazeContainer innerRef={node => (this.canvas = node)} />;
  }
}

export default Maze;
