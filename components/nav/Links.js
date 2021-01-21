import Link from 'next/link';

const Links = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="hidden lg:flex lg:justify-between lg:w-1/3 text-white-700 font-semibold ">
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
    </div>
  );
};

export default Links;
