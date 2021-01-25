import { motion } from 'framer-motion';

import { headerVariants } from 'utils/framer';

import NavLogo from 'components/nav/NavLogo';
import NavLinks from 'components/nav/NavLinks';
import IconMenu from 'components/icons/IconMenu';

const Header = ({ toggleDrawer, setToggleDrawer }) => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-99 h-12 lg:h-24 2xl:h-32 flex items-center justify-between text-gray-600 px-6 lg:px-12 2xl:px-16"
      initial="initial"
      animate="animate"
      variants={headerVariants}
    >
      <NavLogo />

      <NavLinks toggleDrawer={toggleDrawer} setToggleDrawer={setToggleDrawer} />

      <div
        className="block lg:hidden"
        onClick={() => setToggleDrawer(!toggleDrawer)}
      >
        <button
          className="border-none bg-none outline-none ring-0 focus:outline-none"
          type="button"
        >
          <IconMenu />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
