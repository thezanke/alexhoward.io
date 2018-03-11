import React from 'react';
import styled from 'styled-components';

import { LinkedinIcon, GithubIcon, TwitterIcon } from './icons';

const GRAVATAR_URL_BASE =
  'https://gravatar.com/avatar/f16320597c08a8462094030bcee31207';
const GRAVATAR_SMALL = 128;
const GRAVATAR_LARGE = 200;
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

    @media (max-width: ${SMALL_SCREEN_SIZE}px) {
      flex-direction: column;
      justify-content: space-around;
      padding: 1rem;
    }
  }
`;

const Gravatar = styled.div`
  display: block;
  width: ${GRAVATAR_SMALL}px;
  height: ${GRAVATAR_SMALL}px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: ${BORDER_RADIUS}px;
  border-right: 1px solid black;
  background-image: url('${GRAVATAR_URL_BASE}?size=${GRAVATAR_SMALL}');

  @media (max-width: ${SMALL_SCREEN_SIZE}px) {
    width: ${GRAVATAR_LARGE}px;
    height: ${GRAVATAR_LARGE}px;
    background-image: url('${GRAVATAR_URL_BASE}?size=${GRAVATAR_LARGE}');
    border: 1px solid black;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;

  h1 {
    margin: 0 0 0.33rem;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 2.5rem;
    vertical-align: top;
  }

  em {
    color: #e3e3e3;
  }

  @media (max-width: ${SMALL_SCREEN_SIZE}px) {
    text-align: center;
    padding: 0;
    margin-top: 0.75rem;

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
    margin-top: 0.5rem;
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
