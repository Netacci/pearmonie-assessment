import Layout from '../../components/layout/Layout';
import UsersSummary from './components/UsersSummary';

import UsersTable from './components/UsersTable';

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
