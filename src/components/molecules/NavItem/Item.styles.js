import styled from 'styled-components';

export const NavItem = styled.a`
  color: #737c8e;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
  padding: 0 25px;
  text-align: right;
  padding-bottom: 15px;
`;
