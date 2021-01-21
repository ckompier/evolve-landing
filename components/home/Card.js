import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUpFoto = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: easing,
    },
  },
};

const fadeInUpFoto2 = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 2,
      ease: easing,
    },
  },
};
const fadeInDownHero = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: easing,
    },
  },
};

const Card = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className=" mt-48 h-full mt:relative mt:col-start-2  lg:relative lg:flex lg:h-full lg:mt-0 lg:ml-24"
    >
      <div
        className="line-6 absolute opacity-80 text-4xl font-bold text-gray-700 lg:text-gray-700 lg:text-8xl lg:mt-24 z-50"
        layout="responsive"
      >
        <h1>
          <motion.div variants={fadeInUpFoto}>
            <span>somos</span>
          </motion.div>

          <motion.div
            variants={fadeInUpFoto2}
            className="tracking-tighter	ml-12 font-logo mt:text-4xl lg:text-8xl lg:ml-19 lg:mt-8"
          >
            Evolve.
          </motion.div>
        </h1>
      </div>

      <motion.div
        variants={fadeInDownHero}
        className=" ml-10 mt-6 lg:p-0 lg:w-full lg:h-full"
      >
        <Image src="/FotoHome3.png" layout="responsive" width={4} height={5} />
      </motion.div>
    </motion.div>
  );
};

export default Card;
