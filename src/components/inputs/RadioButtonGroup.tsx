import React from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';

interface Option {
  value: string;
  label: string;
}

interface RadioButtonGroupProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void; 
}

const RadioGroupWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, selectedValue, onChange }) => (
  <RadioGroupWrapper>
    {options.map((option) => (
      <RadioButton
        key={option.value}
        label={option.label}
        checked={selectedValue === option.value}
        onChange={() => onChange(option.value)}
      />
    ))}
  </RadioGroupWrapper>
);

export default RadioButtonGroup;
