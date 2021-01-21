import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDownHero = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      ease: easing,
    },
  },
};

const fadeInDownLinea2 = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 4,
      delay: 2,
      ease: easing,
    },
  },
};

const TextoHome = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fadeInDownLinea2}>
        <hr className="mb-6"></hr>
      </motion.div>
      <motion.div variants={fadeInDownHero}>
        <p className=" w-full font-thing text-left text-gray-700 lg:mt-2 lg:text-gray-600 lg:font-thin italic">
          Evolve Sport Material nace con el principal objetivo de abastecer con
          material deportivo a todo ese sector de la población interesado en la
          actividad física y que permita sacar el máximo rendimiento a cada
          entrenamiento o readaptación.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TextoHome;
