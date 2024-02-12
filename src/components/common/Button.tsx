import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  color?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  color,
  textColor,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      color={color}
      textColor={textColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  disabled?: boolean;
  color?: string;
  textColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled, color }) => (disabled ? '#ccc' : color)};
  color: ${({ textColor }) => textColor || 'white'}; 
  max-width: 200px;

  &:focus {
    outline: none;
  }

  &:not(:disabled):not(:focus):hover {
    background-color: ${({ color }) => color && `${color}`};
  }
`;

export default Button;
