import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { BrandColor } from '../../utils/GlobalStyles';

interface RadioButtonProps {
  label: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const StyledLabel = styled.label<{ selected?: boolean; disabled?: boolean }>`
  font-weight: 600;
  font-size: 1rem;
  color: ${({ selected }) => (selected ? BrandColor.YELLOW : BrandColor.BLUE)};
  cursor: default;

  ${({ disabled }) =>
    disabled &&
    `
    color: ${BrandColor.BLUE};
    cursor: not-allowed;
    &::after {
      margin-left: 8px;
      width: 12px;
      height: 15px;
      display: inline-block;
      content: " ";
      -webkit-mask: url("/lock.svg") no-repeat 50% 50%;
      -webkit-mask-size: cover;
      background-color: ${BrandColor.BLUE};
    }
  `}
`;

const StyledRadio = styled.input<{ checked: boolean }>`
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ checked }) =>
    checked ? BrandColor.YELLOW : BrandColor.BLUE};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 2px;
  }

  &:checked::after {
    background-color: ${BrandColor.YELLOW};
  }

  &:hover::after {
    background-color: ${({ checked }) =>
      checked ? BrandColor.YELLOW : BrandColor.BLUE};
  }

  &:focus {
    outline: 2px solid ${BrandColor.YELLOW};
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-right: 15px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, checked, onChange }) => (
  <Wrapper onClick={() => onChange}>
    <StyledRadio
      type="radio"
      checked={checked}
      onChange={onChange}
      onClick={(e) => e.stopPropagation()}
    />
    <StyledLabel selected={checked}>{label}</StyledLabel>
  </Wrapper>
);

export default RadioButton;
