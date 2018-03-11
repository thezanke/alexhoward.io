import React from 'react';
import styled from 'styled-components';

import { LinkedinIcon, GithubIcon, TwitterIcon } from './icons';

const GRAVATAR_SIZE = 128;
const ICON_SIZE = 35;
const BORDER_RADIUS = 8;

const CardRoot = styled.div`
  user-select: none;

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: ${BORDER_RADIUS}px;
    border: 1px solid black;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.8);
  }
`;

const GravatarRoot = styled.div`
  display: block;
  width: ${GRAVATAR_SIZE}px;
  height: ${GRAVATAR_SIZE}px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: ${BORDER_RADIUS}px;

  img {
    display: block;
  }
`;

const Gravatar = () => (
  <GravatarRoot>
    <img src={`//gravatar.com/avatar/f16320597c08a8462094030bcee31207?size=${GRAVATAR_SIZE}`} alt="gravatar" />
  </GravatarRoot>
);

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;

  h1 {
    margin: 0;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 2.5rem;
    vertical-align: top;
    margin-bottom: 0.33rem;
  }

  em {
    color: #e3e3e3;
  }
`;

const SocialLinksRoot = styled.div`
  display: flex;
  align-items: center;

  > *:not(:first-child) {
    margin-left: 0.66em;
  }

  a,
  a:hover,
  a:active,
  a:visited,
  a:focus {
    text-decoration: none;
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
