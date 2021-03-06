import React, { Fragment, PureComponent } from 'react';
import styled, { injectGlobal } from 'styled-components';

import BackgroundAnimation from './BackgroundAnimation';
import Card from './Card';

injectGlobal`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  body {
    background-color: #0f0f0f;
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
`;

class App extends PureComponent {
  handler = null;

  onClick = () => {
    if (this.handler) {
      this.handler();
    }

    if (process.env.NODE_ENV === 'production') {
      window.gtag('event', 'click', { event_category: 'interaction' });
    }
  };

  registerHandler = fn => {
    this.handler = fn;
  };

  render() {
    return (
      <Fragment>
        <BackgroundHolder>
          <BackgroundAnimation registerHandler={this.registerHandler} />
        </BackgroundHolder>
        <ContentHolder onClick={this.onClick}>
          <Card />
        </ContentHolder>
      </Fragment>
    );
  }
}

export default App;
