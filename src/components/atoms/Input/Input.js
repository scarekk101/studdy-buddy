import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
  padding: 4px 20px;
  border: none;
  border-radius: 5px;
`;

export const Input = ({ id, value }) => <InputWrapper id={id} value={value} />;
