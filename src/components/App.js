import React, { Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Maze from './Maze';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './icons';

const GRAVATAR_SIZE = 128;
const GRAVATAR_URL = 'http://gravatar.com/avatar/f16320597c08a8462094030bcee31207?size=' + GRAVATAR_SIZE;
const ICON_SIZE = 32;

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

  > div {
    flex: 0 1;
  }
`;

const PersonalInfo = styled.main`
  display: flex;

  svg {
    fill: #ffffff;
  }
`;

const Content = styled.div`
  height: 100%;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3rem;
    vertical-align: top;
  }

  em {
    color: #e3e3e3;
  }

  > div:last-child {
    flex: 1;
  }
`;

const GravatarRoot = styled.div`
  display: inline-block;
  width: ${GRAVATAR_SIZE}px;
  height: ${GRAVATAR_SIZE}px;
  border-radius: ${GRAVATAR_SIZE / 6}px;
  overflow: hidden;
`;

const Gravatar = () => (
  <GravatarRoot>
    <img src={GRAVATAR_URL} alt="gravatar" />
  </GravatarRoot>
);

const SocialLinksRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  > *:not(:first-child) {
    margin-left: 0.5em;
  }
`;

const SocialLinks = () => (
  <SocialLinksRoot>
    <a href="https://www.github.com/thezanke" target="_blank" rel="noopener noreferrer">
      <GithubIcon size={ICON_SIZE} />
    </a>
    <a href="https://www.twitter.com/thezanke" target="_blank" rel="noopener noreferrer">
      <TwitterIcon size={ICON_SIZE} />
    </a>
    <a href="https://www.linkedin.com/in/alex-howard-9597a957/" target="_blank" rel="noopener noreferrer">
      <LinkedinIcon size={ICON_SIZE} />
    </a>
  </SocialLinksRoot>
);

const App = () => (
  <Fragment>
    <MazeContainer>
      <Maze />
    </MazeContainer>
    <RootLayout>
      <div>
        <PersonalInfo>
          <div>
            <Gravatar />
          </div>
          <div>
            <Content>
              <div>
                <h1>Alex Howard</h1>
                <em>Giant Software Developer</em>
              </div>
              <div>
                <SocialLinks />
              </div>
            </Content>
          </div>
        </PersonalInfo>
      </div>
    </RootLayout>
  </Fragment>
);

export default App;
