import Link from 'next/link';
import { motion } from 'framer-motion';

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDownTitulo = {
  initial: {
    y: -30,
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

const fadeInDownLinea = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
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
      delay: 0.2,
      ease: easing,
    },
  },
};
const TextoContacto = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fadeInDownLinea}>
        <hr className=""></hr>
      </motion.div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-wrap">
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <motion.div variants={fadeInDownTitulo} class="flex-grow">
                <a href="mailto:lokismind@gmail.com">
                  <h2 class="text-gray-600 text-lg title-font font-bold mb-2">
                    email.
                  </h2>
                  <p class="leading-relaxed lg:text-2xl">
                    evolvesportmaterial@gmail.com
                  </p>
                </a>
              </motion.div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
              <motion.div variants={fadeInDownTitulo} class="flex-grow">
                <a href="tel:0034687465810">
                  <h2 class="text-gray-600 text-lg title-font font-bold mb-2">
                    teléfono.
                  </h2>

                  <p class="leading-relaxed lg:text-2xl">687465810</p>
                </a>
              </motion.div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
              <motion.div variants={fadeInDownTitulo} class="flex-grow">
                <a href="https://www.instagram.com/evolve_material_deportivo/">
                  <h2 class="text-gray-600 text-lg title-font font-bold mb-2">
                    instagram.
                  </h2>
                  <p class="leading-relaxed font-thin lg:text-2xl">
                    @evolve_material_deportivo
                  </p>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <motion.div variants={fadeInDownLinea2}>
        <hr className="mb-6"></hr>
      </motion.div>
    </motion.div>
  );
};

export default TextoContacto;
