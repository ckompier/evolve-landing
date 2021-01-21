import TextoCatalogo from 'components/catalogo/TextoCatalogo';
import BotonCatalogo from 'components/catalogo/BotonCatalogo';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUpTexto = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
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
      duration: 4,
      ease: easing,
    },
  },
};
const CardTextCatalogo = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="flex flex-col mt-8 space-y-16 justify-center h-full lg:text-xl lg:h-full  lg:px-24 lg:mt-0"
    >
      <motion.div variants={fadeInUpTexto}>
        <TextoCatalogo />
      </motion.div>
      <motion.div variants={fadeInUpBoton} className="lg:ml-48 ml-16">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
        >
          <BotonCatalogo />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CardTextCatalogo;
