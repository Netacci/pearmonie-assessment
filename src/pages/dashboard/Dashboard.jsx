import Layout from '../../components/layout/Layout.jsx';
import UsersSummary from './components/UsersSummary.jsx';

import UsersTable from './components/UsersTable.jsx';

const Dashboard = () => {
  return (
    <Layout>
      <div className='relative h-[calc(100vh-64px)] overflow-y-auto md:-mr-[50px]'>
        <UsersSummary />
        <UsersTable />
      </div>
    </Layout>
  );
};

export default Dashboard;
