import Link from 'next/link';

const BotonCatalogo = () => {
  return (
    <Link href={'https://linktr.ee/EVOLVE_SPORT_MATERIAL'}>
      <button className="flex-shrink-0 text-white bg-gray-400 rounded-3xl py-2 px-8 focus:outline-none hover:bg-gray-700 text-lg lg:mt-10 sm:mt-0">
        catálogo.
      </button>
    </Link>
  );
};

export default BotonCatalogo;
