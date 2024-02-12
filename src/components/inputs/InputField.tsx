import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, value, onChange }) => {
  const [rows, setRows] = React.useState(10);

  return (
    <StyledTextarea
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={onChange}
    />
  );
};

const StyledTextarea = styled.textarea`
  width: 100%;
  height: auto;
  max-height: 50px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #000;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export default Textarea;
