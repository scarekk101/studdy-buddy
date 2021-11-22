import styled from 'styled-components';

export const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
`;

export const LogoHeader = styled.h1`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-align: right;
  margin-right: 20px;
`;
