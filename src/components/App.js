import React, { Fragment, PureComponent } from 'react';
import styled, { injectGlobal } from 'styled-components';

import BackgroundAnimation from './BackgroundAnimation';
import Card from './Card';

export const GRAVATAR_URL = 'http://gravatar.com/avatar/f16320597c08a8462094030bcee31207';

const FAVICON_GRAVATAR_URL = `${GRAVATAR_URL}?size=32`;

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

const BackgroundHolder = styled.div`
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
  background-color: rgba(0, 0, 0, 0.66);
`;

class App extends PureComponent {
  componentDidMount() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = FAVICON_GRAVATAR_URL;
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  render() {
    return (
      <Fragment>
        <BackgroundHolder>
          <BackgroundAnimation />
        </BackgroundHolder>
        <ContentHolder>
          <Card />
        </ContentHolder>
      </Fragment>
    );
  }
}

export default App;
