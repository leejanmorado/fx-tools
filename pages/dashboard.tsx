import MainLayout from '../src/layout/MainLayout';
import { NextPageWithLayout } from './_app';

const DashboardPage: NextPageWithLayout = () => {
  return <div>DashboardPage</div>;
};

DashboardPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default DashboardPage;
