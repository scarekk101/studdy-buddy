import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 15px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 10px 0;
  border: none;
  border-radius: 25px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
