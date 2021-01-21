import CardContacto from 'components/contacto/CardContacto';
import CardTextContacto from 'components/contacto/CardTextContacto';
import Head from 'next/head';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 1];

const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

export default function IndexPage() {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div>
        <Head>
          <title>Evolve Sport Material</title>
        </Head>
        <section className="tw-container min-h-screen flex flex-col lg:grid grid-flow-col grid-cols-2 lg:ml-44 lg:mt-14">
          <motion.div variants={fadeInUp}>
            <CardContacto />
          </motion.div>
          <CardTextContacto />
        </section>
      </div>
    </motion.div>
  );
}
