import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import noop from 'lodash/noop';

const UNLOCK_COUNT = 42;

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
  transition: font-size 300ms;

  ${props =>
    props.unlockable &&
    `
    font-weight: bold;
    font-size: 1.2rem;
    
    &:hover {
      font-size: 1.5rem;
    }
  `};

  ${props => props.unlocked && `color: yellow;`}
`;

// TODO: ball mode

class PowerMode extends PureComponent {
  state = { unlocked: false };

  unlock = () => this.setState({ unlocked: true });

  render() {
    const { count } = this.props;
    const { unlocked } = this.state;

    if (count < 10) return null;

    const unlockable = count === UNLOCK_COUNT;

    return createPortal(
      <PowerModeRoot>
        <Count
          onClick={unlockable ? this.unlock : noop}
          unlockable={!unlocked && unlockable}
          unlocked={unlocked}
        >
          {count}
        </Count>
      </PowerModeRoot>,
      document.getElementById('root')
    );
  }
}

export default PowerMode;
