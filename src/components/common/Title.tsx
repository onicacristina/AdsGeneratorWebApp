import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  children: React.ReactNode;
  level?: number;
  color?: string;
}

const StyledTitle = styled.h1<TitleProps>`
  color: ${(props) => props.color || 'black'};
`;

const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  color = 'black',
}) => {
  return (
    <StyledTitle as={`h${level}`} color={color}>
      {children}
    </StyledTitle>
  );
};

export default Title;
