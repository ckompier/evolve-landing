const SocialItem = ({ label, link, name }) => {
  return (
    <div className="flex flex-col space-y-1 lg:space-y-3 text-gray-600">
      <h2 className="text-base lg:text-lg 2xl:text-xl font-bold">{label}</h2>
      <a className="text-lg lg:text-xl 2xl:text-2xl" href={link}>
        {name}
      </a>
    </div>
  );
};

export default SocialItem;

// evolvesportmaterial@gmail.com

// mailto:lokismind@gmail.com
