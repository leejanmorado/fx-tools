import MainLayout from '../src/layout/MainLayout';
import { NextPageWithLayout } from './_app';

const JournalPage: NextPageWithLayout = () => {
  return <div>JournalPage</div>;
};

JournalPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default JournalPage;
