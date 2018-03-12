import React from 'react';
import styled from 'styled-components';

import { LinkedinIcon, GithubIcon, TwitterIcon } from './icons';

const GRAVATAR_URL_BASE =
  'https://gravatar.com/avatar/f16320597c08a8462094030bcee31207';
const AVATAR_LG_SCREEN = 150;
const AVATAR_SM_SCREEN = 265;
const ICON_SIZE = 35;
const BORDER_RADIUS = 4;
const SMALL_SCREEN_SIZE = 500;

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

  @media (max-width: ${SMALL_SCREEN_SIZE}px) {
    > div:first-child {
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

const Gravatar = styled.div`
  display: block;
  width: ${AVATAR_LG_SCREEN}px;
  height: ${AVATAR_LG_SCREEN}px;
  overflow: hidden;
  box-sizing: border-box;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-bottom-left-radius: ${BORDER_RADIUS}px;
  border-right: 1px solid black;
  background-image: url('${GRAVATAR_URL_BASE}?size=${AVATAR_LG_SCREEN}');

  @media (max-width: ${SMALL_SCREEN_SIZE}px) {
    width: ${AVATAR_SM_SCREEN}px;
    height: ${AVATAR_SM_SCREEN}px;
    background-image: url('${GRAVATAR_URL_BASE}?size=${AVATAR_SM_SCREEN}');
    border-right: none;
    border-bottom: 1px solid black;
    border-top-right-radius: ${BORDER_RADIUS}px;
    border-bottom-left-radius: 0;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  flex: 1 1 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    margin-bottom: 0.5rem;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 2.5rem;
    vertical-align: top;
  }

  h2 {
    margin-bottom: 0.75rem;
    font-weight: normal;
    font-style: italic;
    font-size: 1rem;
    color: #e3e3e3;
  }

  @media (max-width: ${SMALL_SCREEN_SIZE}px) {
    text-align: center;
    padding: 0;
    margin: 1rem 0;

    h1 {
      font-size: 2.5rem;
      line-height: 2.2rem;
    }
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

  @media (max-width: ${SMALL_SCREEN_SIZE}px) {
    justify-content: center;
  }
`;

const SocialLinks = () => (
  <SocialLinksRoot>
    <a
      href="https://www.github.com/thezanke"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon size={ICON_SIZE} />
    </a>
    <a
      href="https://www.twitter.com/thezanke"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon size={ICON_SIZE} />
    </a>
    <a
      href="https://www.linkedin.com/in/alex-howard-9597a957/"
      target="_blank"
      rel="noopener noreferrer"
    >
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
      <Content>
        <h1>Alex Howard</h1>
        <h2>Giant Software Developer</h2>
        <div>
          <SocialLinks />
        </div>
      </Content>
    </div>
  </CardRoot>
);

export default Card;
