import Link from 'next/link';

const NavLinks = ({ setToggleDrawer }) => {
  const links = [
    {
      slug: '/',
      method: 'setToggleDrawer(false)',
      label: '¿Qué es Evolve?',
    },
    {
      slug: '/catalogo',
      method: 'setToggleDrawer(false)',
      label: 'Catálogo',
    },
    {
      slug: '/comunidad',
      method: 'setToggleDrawer(false)',
      label: 'Comunidad',
    },
    {
      slug: '/contacto',
      method: 'setToggleDrawer(false)',
      label: 'Contacto',
    },
  ];

  return (
    <div className="hidden lg:flex lg:justify-between lg:w-3/5 lg:text-base text-gray-600 font-semibold border border-gray-300">
      {links.map((link) => (
        <Link href={link.slug}>
          <a
            onClick={() => {
              link.method;
            }}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
