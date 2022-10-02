import MainLayout from '../src/layout/MainLayout';
import { NextPageWithLayout } from './_app';

const CalculatorPage: NextPageWithLayout = () => {
  return <div>CalculatorPage</div>;
};

CalculatorPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default CalculatorPage;
