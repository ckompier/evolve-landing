import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from 'components/icons/MenuIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0">
      <nav className="bg-purple-700 dark:bg-gray-800 shadow text-gray-100">
        <div className="container mx-auto py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <a
                className="font-logo text-gay 50-600 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
                href="#"
              >
                EVOLVE
              </a>
            </div>

            <div
              className="flex md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <button type="button">
                <MenuIcon />
              </button>
            </div>
          </div>

          <div
            className={`md:flex items-center ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link href="/">
                <a
                  className="my-1 text-sm text-white-700 font-bold dark:text-gray-200  hover:text-gray-100 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ¿Qué es Evolve?
                </a>
              </Link>
              <Link href="/catalogo">
                <a
                  className="my-1 text-sm text-white-700 font-bold dark:text-gray-200  hover:text-gray-100 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catálogo
                </a>
              </Link>
              <Link href="/rrss2">
                <a
                  className="my-1 text-sm text-white-700 font-bold dark:text-gray-200 hover:text-gray-100 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comunidad
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="my-1 text-sm text-white-700 font-bold dark:text-gray-200 hover:text-gray-100 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
