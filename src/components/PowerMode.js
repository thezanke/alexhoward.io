import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Count = styled.div`
  color: #eee;
  font-weight: 400;
  text-shadow: 1px 1px 1px black;
`;

const PowerModeRoot = styled.div`
  position: fixed;
  top: 1rem;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  user-select: none;
`;

const PowerMode = ({ count }) =>
  createPortal(
    <PowerModeRoot>
      <Count>{count}</Count>
    </PowerModeRoot>,
    document.getElementById('root')
  );

export default PowerMode;
