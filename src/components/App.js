import React, { Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Card from './Card';
import Maze from './Maze';

injectGlobal`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  body {
    background-color: black;
    color: white;
  }
`;

const MazeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

const App = () => (
  <Fragment>
    <MazeContainer>
      <Maze />
    </MazeContainer>
    <Card />
  </Fragment>
);

export default App;
