import Image from 'next/image';

const Logo = () => {
  return (
    <div className="w-full p-6 lg:w-1/2 lg:p-36">
      <Image src="/logo_big.svg" layout="responsive" width={4} height={4} />
    </div>
  );
};

export default Logo;
