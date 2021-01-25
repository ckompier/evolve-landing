import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import PageHero from 'components/shared/PageHero';
import PageWrapper from 'components/shared/PageWrapper';
import CommunityBody from 'components/community/CommunityBody';

export default function PageComunidad() {
  return (
    <>
      <Head>
        <title>{WEB_NAME}</title>
      </Head>

      <PageWrapper>
        <PageHero heroTitle="únete." heroImage="community-hero.png" />

        <CommunityBody />
      </PageWrapper>
    </>
  );
}
