import { motion } from 'framer-motion';

import { parentVariants } from 'utils/framer';

const BodyWrapper = ({ children }) => {
  return (
    <motion.section
      className="w-full lg:w-2/5 lg:h-screen flex flex-col items-center justify-center border border-gray-300"
      variants={parentVariants}
    >
      {children}
    </motion.section>
  );
};

export default BodyWrapper;
