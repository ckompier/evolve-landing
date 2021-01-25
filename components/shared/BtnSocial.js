const BtnSocial = ({ link, label }) => {
  return (
    <button className="w-min py-2 px-5 lg:py-3 lg:px-6 rounded-3xl focus:outline-none text-white text-lg lg:text-xl 2xl:text-2xl bg-gray-400 hover:bg-gray-700 transform hover:scale-110 tw-animation">
      <a href={link} target="_blank" rel="noopener">
        {label}
      </a>
    </button>
  );
};

export default BtnSocial;
