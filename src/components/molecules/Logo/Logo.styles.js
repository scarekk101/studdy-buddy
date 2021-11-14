import styled from 'styled-components';

export const LogoItem = styled.a`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  word-wrap: break-word;
  padding: 15px;
  margin: 20px 0 50px 0;
  font-weight: 700;
`;
