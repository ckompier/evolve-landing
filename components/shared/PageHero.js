import Image from 'next/image';
import { motion } from 'framer-motion';

import { parentVariants, childVariants } from 'utils/framer';

const PageHero = ({ heroTitle, heroImage }) => {
  return (
    <section className="relative h-screen-75 lg:h-screen w-full lg:w-2/5 flex items-center justify-center lg:mt-0 border border-gray-300">
      <motion.h1
        className="absolute lg:top-1/3 z-50 text-4xl lg:text-7xl 2xl:text-8xl text-gray-600 font-bold  tracking-wider"
        variants={childVariants}
      >
        {heroTitle}
      </motion.h1>

      <motion.div variants={childVariants}>
        <Image
          className="opacity-50"
          src={`/${heroImage}`}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </motion.div>
    </section>
  );
};

export default PageHero;
