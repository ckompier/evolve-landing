import Head from 'next/head';
import Card from 'components/home/Card';
import CardText from 'components/home/CardText';
import { motion } from 'framer-motion';

export default function IndexPage() {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <>
        <Head>
          <title>Evolve Sport Material</title>
        </Head>
        <section className="tw-container min-h-screen flex flex-col lg:grid grid-flow-col grid-cols-2 lg:ml-44">
          <Card />
          <CardText />
        </section>
      </>
    </motion.div>
  );
}
