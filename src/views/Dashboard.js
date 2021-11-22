import { React } from 'react';
import { ViewWrapper } from 'templates/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
const Dashboard = () => {
  return (
    <>
      <ViewWrapper>
        <UsersList />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
