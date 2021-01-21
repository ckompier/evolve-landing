import BotonCatalogo from 'components/catalogo/BotonCatalogo';
import CardCatalogo from 'components/catalogo/CardCatalogo';
import CardTextCatalogo from 'components/catalogo/CardTextCatalogo';
import Head from 'next/head';
import Link from 'next/link';

export default function CatalogoPage() {
  return (
    <>
      <Head>
        <title>Evolve Sport Material</title>
      </Head>

      <section className="tw-container min-h-screen flex flex-col lg:grid grid-flow-col grid-cols-2 lg:ml-44 lg:mt-14">
        <CardCatalogo />

        <CardTextCatalogo />
      </section>
    </>
  );
}
