import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import './App.css';

injectGlobal`
  body {
    background-color: black;
  }
`;

const RootLayout = styled.div`
  font-size: 16px;
`;

const App = () => <RootLayout>Hello world!</RootLayout>;

export default App;
