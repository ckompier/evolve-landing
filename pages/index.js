import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageWrapper from 'components/shared/PageWrapper';
import HomeHero from 'components/home/HomeHero';
import HomeBody from 'components/home/HomeBody';

export default function PageHome() {
  return (
    <>
      <Head>
        <title>{WEB_NAME}</title>
      </Head>

      <PageWrapper>
        <HomeHero />
        <HomeBody />
      </PageWrapper>
    </>
  );
}
