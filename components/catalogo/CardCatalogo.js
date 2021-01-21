import Image from 'next/image';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUpTexto = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 0.75,
    transition: {
      duration: 2.5,
      ease: easing,
    },
  },
};

const fadeInUpBoton = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      ease: easing,
    },
  },
};

const CardCatalogo = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className=" mt-24 h-full pr-24 mt:relative mt:col-start-2  lg:relative lg:flex lg:h-full lg:mt-42 lg:ml-18"
    >
      <motion.div
        variants={fadeInUpBoton}
        className="mt-24 ml-8 line-6 absolute opacity-80 text-5xl font-bold text-gray-600 lg:text-gray-700 lg:text-8xl lg:ml-12 lg:mt-44 z-50"
        layout="responsive"
      >
        <h1>
          <span>catálogo.</span>
        </h1>
      </motion.div>
      <div className=" pr-20 w-96 h-96 lg:p-0 lg:w-full lg:h-full">
        <motion.div variants={fadeInUpTexto}>
          <Image
            src="/figura 2 retoque.png"
            layout="responsive"
            width={10}
            height={10}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardCatalogo;
