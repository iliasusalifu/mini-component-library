import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <OriginalSelect value={value} onChange={onChange}>
        {children}
      </OriginalSelect>
      <NewSelect>
        <SelectedElem>{displayedValue}</SelectedElem>
        <IconWrapper>
          <Icon id="chevron-down"></Icon>
        </IconWrapper>
      </NewSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 300px;
`;

const OriginalSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const NewSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  display: inline-block;
  border-radius: 4px;
  padding: 8px;
  color: ${COLORS.gray700};

  ${OriginalSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${OriginalSelect}:focus + & {
    outline: 1px dashed #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: 6px;
`;
const SelectedElem = styled.div`
  display: inline-block;
  padding: 12px 16px;
  position: relative;
  color: inherit;
`;

export default Select;
