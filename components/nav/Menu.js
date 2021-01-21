import Link from 'next/link';

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav
      className={`lg:hidden ${
        isMenuOpen
          ? 'absolute top-0 bottom-0 left-0 right-0 flex flex-col space-y-28 h-full z-30 pt-24 pl-6 text-4xl bg-gray-100 '
          : 'hidden'
      } text-white-700 font-bold hover:text-gray-100`}
    >
      <Link href="/">
        <a onClick={() => setIsMenuOpen(false)}>¿Qué es Evolve?</a>
      </Link>
      <Link href="/catalogo">
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          Catálogo
        </a>
      </Link>
      <Link href="/rrss2">
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          Comunidad
        </a>
      </Link>
      <Link href="/contact">
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          Contacto
        </a>
      </Link>
    </nav>
  );
};

export default Menu;
