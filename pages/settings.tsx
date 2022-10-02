import MainLayout from '../src/layout/MainLayout';
import { NextPageWithLayout } from './_app';

const SettingsPage: NextPageWithLayout = () => {
  return <div>SettingsPage</div>;
};

SettingsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default SettingsPage;
