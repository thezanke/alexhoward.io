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
    background-color: #333;
    color: white;
  }
`;

const MazeHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

const ContentHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const App = () => (
  <Fragment>
    <MazeHolder>
      <Maze />
    </MazeHolder>
    <ContentHolder>
      <Card />
    </ContentHolder>
  </Fragment>
);

export default App;
