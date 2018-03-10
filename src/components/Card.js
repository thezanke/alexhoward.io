import React from 'react';
import styled from 'styled-components';

import { LinkedinIcon, GithubIcon, TwitterIcon } from './icons';

const GRAVATAR_SIZE = 128;
const ICON_SIZE = 35;
const BORDER_RADIUS = GRAVATAR_SIZE / 8;

const CardRoot = styled.div`
  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    width: 460px;
    padding: 0.8rem;
    background-color: rgba(0, 0, 0, 0.66);
    border-radius: ${BORDER_RADIUS}px;
    border: 2px solid black;
  }
`;

const Content = styled.div`
  height: 100%;
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
  display: block;
  width: ${GRAVATAR_SIZE}px;
  height: ${GRAVATAR_SIZE}px;
  border-radius: ${BORDER_RADIUS}px;
  overflow: hidden;
  border: 2px solid black;
  box-sizing: border-box;

  img {
    display: block;
  }
`;

const Gravatar = () => (
  <GravatarRoot>
    <img src={`//gravatar.com/avatar/f16320597c08a8462094030bcee31207?size=${GRAVATAR_SIZE}`} alt="gravatar" />
  </GravatarRoot>
);

const SocialLinksRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  > *:not(:first-child) {
    margin-left: 0.66em;
  }

  svg {
    fill: #ffffff;
    transition: fill 0.25s;
    vertical-align: middle;

    &:hover {
      fill: #cccccc;
    }
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

const Card = () => (
  <CardRoot>
    <div>
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
    </div>
  </CardRoot>
);

export default Card;
