import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/DeleteIcon.svg';

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: red;
  border: none;
  border-radius: 50px;
  color: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Button = (props) => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
