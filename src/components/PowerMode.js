import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const PowerModeRoot = styled.div`
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  user-select: none;
`;

const Count = styled.div`
  color: #eee;
  font-weight: 400;
  text-shadow: 1px 1px 1px black;
`;

const PowerMode = ({ count }) =>
  createPortal(
    <PowerModeRoot>
      <Count>{count}</Count>
    </PowerModeRoot>,
    document.getElementById('root')
  );

export default PowerMode;
