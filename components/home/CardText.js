import Image from 'next/image';

import TextoHome from 'components/home/TextoHome';
const CardText = () => {
  return (
    <div className="flex flex-col space-y-16 justify-center h-full mt-14 lg:text-xl lg:p-16 lg:mt-2">
      <TextoHome />
    </div>
  );
};

export default CardText;
