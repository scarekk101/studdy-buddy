import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/Theme';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import UserProvider from 'providers/UserProvider';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addUser" element={<AddUser />} />
          </Routes>
        </UserProvider>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
