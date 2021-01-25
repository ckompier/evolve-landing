import Link from 'next/link';

const NavLogo = () => {
  return (
    <div className="w-2/3">
      <Link href="/">
        <a className="font-header text-gray-600  md:text-2xl">EVOLVE</a>
      </Link>
    </div>
  );
};

export default NavLogo;
