import React, { Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';

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

  .text-center {
    text-align: center;
  }
`;

const MazeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

const RootLayout = styled.div`
  font-size: 16px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PersonalInfo = styled.main`
  flex: 0 1;

  > * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3rem;
  }
`;

const App = () => (
  <Fragment>
    <MazeContainer>
      <Maze />
    </MazeContainer>
    <RootLayout>
      <PersonalInfo>
        <div className="text-center">
          <img src="http://gravatar.com/avatar/f16320597c08a8462094030bcee31207?size=100" alt="gravatar" />
        </div>
        <h1>Alex Howard</h1>
        <em>Giant Software Developer</em>
      </PersonalInfo>
    </RootLayout>
  </Fragment>
);

export default App;
