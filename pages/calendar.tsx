import MainLayout from '../src/layout/MainLayout';
import { NextPageWithLayout } from './_app';

const CalendarPage: NextPageWithLayout = () => {
  return <div>CalendarPage</div>;
};

CalendarPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default CalendarPage;
