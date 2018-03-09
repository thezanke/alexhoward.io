import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Maze from './Maze';

injectGlobal`
  body {
    background-color: black;
  }
`;

const RootLayout = styled.div`
  font-size: 16px;
`;

const App = () => (
  <RootLayout>
    Hello world!<br />
    <Maze />
  </RootLayout>
);

export default App;
