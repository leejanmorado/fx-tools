import MainLayout from '../src/layout/MainLayout';
import { NextPageWithLayout } from './_app';

const ProfilePage: NextPageWithLayout = () => {
  return <div>ProfilePage</div>;
};

ProfilePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProfilePage;
