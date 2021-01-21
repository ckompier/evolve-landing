import { useState, useEffect } from 'react';
import Logo from 'components/nav/Logo';
import Links from 'components/nav/Links';
import Menu from 'components/nav/Menu';
import MenuIcon from 'components/icons/MenuIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-20 px-4 flex items-center justify-between fixed top-0 left-0 right-0 h-12 lg:h-24 text-gray-600 tw-border lg:px-12">
      <Logo />
      <Links isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <button
        type="button"
        className="lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon />
      </button>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
