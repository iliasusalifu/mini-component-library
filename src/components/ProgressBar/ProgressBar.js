/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Component;
  if (size === 'small') {
    Component = SmallBar;
  } else if (size === 'medium') {
    Component = MediumBar;
  } else if (size === 'large') {
    Component = LargeBar;
  } else {
    throw new Error(`invalid component size: ${size}`);
  }

  return (
    <Component>
      <MiddleBar>
        <InnerBar role="progressbar" value={value} aria-valuenow={value}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </InnerBar>
      </MiddleBar>
    </Component>
  );
};

const OuterBar = styled.div`
  width: 370px;
  display: block;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const MiddleBar = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const SmallBar = styled(OuterBar)`
  min-height: 8px;
  padding: 0px;
  border-radius: 4px;
`;
const MediumBar = styled(OuterBar)`
  min-height: 12px;
  padding: 0px;
  border-radius: 4px;
`;
const LargeBar = styled(OuterBar)`
  min-height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const InnerBar = styled.div`
  width: ${(props) => props.value}%;
  min-height: 8px;
  display: block;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;

  ${LargeBar} & {
    min-height: 20px;
  }

  ${MediumBar} & {
    min-height: 12px;
  }

  ${SmallBar} & {
    min-height: 8px;
  }
`;

export default ProgressBar;
