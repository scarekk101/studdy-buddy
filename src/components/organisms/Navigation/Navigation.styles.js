import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
  height: 100vh;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
`;
