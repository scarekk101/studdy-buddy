import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';

const MainTemplateWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 150px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const MainTemplate = ({ children }) => {
  return (
    <MainTemplateWrapper>
      <Navigation />
      {children}
    </MainTemplateWrapper>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
