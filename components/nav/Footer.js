import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex py-6 justify-center text-sm text-gray-300 font-bold">
      <div>
        <a
          href="https://ctrl-z.studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Ctrl-Z Studio
        </a>
      </div>
      <div>
        <Image src="/logo.svg" layout="responsive" width={4} height={4} />
      </div>
    </div>
  );
};

export default Footer;
