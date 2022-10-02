import MainLayout from '../src/layout/MainLayout';
import { NextPageWithLayout } from './_app'

const NewsPage: NextPageWithLayout = () => {
  return (
    <div>NewsPage</div>
  )
}

NewsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default NewsPage