import Head from 'next/head';

import { WEB_NAME } from 'utils/constants';

import HeroPagina from 'components/shared/PageHero';
import PageWrapper from 'components/shared/PageWrapper';
import ContactoRedes from 'components/contact/ContactSocials';

export default function PageContact() {
  return (
    <>
      <Head>
        <title>{WEB_NAME}</title>
      </Head>

      <PageWrapper>
        <HeroPagina heroTitle="hablamos?" heroImage="contact-hero.png" />

        <ContactoRedes />
      </PageWrapper>
    </>
  );
}
