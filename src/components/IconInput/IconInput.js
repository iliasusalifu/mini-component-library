import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    textInputWidth: 150 + 'px',
    textInputHeight: 16 + 'px',
    wrapperHeight: 24 + 'px',
    gap: 8 + 'px',
    iconSize: 16,
    fontSize: 14 + 'px',
  },
  large: {
    textInputWidth: 300 + 'px',
    textInputHeight: 21 + 'px',
    wrapperHeight: 36 + 'px',
    gap: 12 + 'px',
    iconSize: 24,
    fontSize: 18 + 'px',
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper
      style={{
        '--text-input-width': SIZES[size].textInputWidth,
        '--wrapper-height': SIZES[size].wrapperHeight,
        '--gap': SIZES[size].gap,
        '--font-size': SIZES[size].fontSize,
      }}
    >
      <label>
        <IconWrapper style={{ '--icon-size': SIZES[size].iconSize + 'px' }}>
          <Icon id={icon} size={SIZES[size].iconSize}></Icon>
        </IconWrapper>
        <TextInput
          value={label}
          placeholder={placeholder}
          style={{
            '--text-input-width': SIZES[size].textInputWidth,
            '--text-input-height': SIZES[size].textInputHeight,
            '--gap': SIZES[size].gap,
            '--icon-size': SIZES[size].iconSize + 'px',
          }}
        ></TextInput>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--icon-size);
  height: var(--icon-size);
  color: ${COLORS.gray700};
`;

const TextInput = styled.input`
  border: none;
  display: inline-block;
  font-size: inherit;
  color: ${COLORS.gray500};
  width: calc(100% - (var(--icon-size) + var(--gap)));
  position: absolute;
  top: 0;

  left: calc(var(--icon-size) + var(--gap));
  bottom: 0;
  height: var(--text-input-height);
  margin: auto 0;

  &:focus-visible {
    outline: 0px solid;
  }
`;

const Wrapper = styled.div`
  border-bottom: 1px solid black;
  position: relative;
  font-size: var(--font-size);
  height: var(--wrapper-height);
  width: var(--text-input-width);

  &:hover ${TextInput}, &:hover ${IconWrapper} {
    color: black;
  }

  &:focus {
    outline: 1px dotted #212121;
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: 2px;
    border-radius: 1px;
  }
`;

export default IconInput;
