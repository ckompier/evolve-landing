import Head from 'next/head';
import Card from 'components/home/Card';
import Logo from 'components/home/Logo';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Evolve Sport Material</title>
      </Head>
      <section className="flex flex-col lg:flex-row">
        <Card />

        <Logo />
      </section>
    </>
  );
}
