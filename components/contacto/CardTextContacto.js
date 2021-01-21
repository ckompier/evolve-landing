import React from 'react';
import TextoContacto from 'components/contacto/TextoContacto';

const CardTextContacto = () => {
  return (
    <div>
      <div className="flex flex-col mt-80 space-y-16 justify-center h-full lg:text-xl lg:h-full  lg:px-24 lg:mt-0">
        <TextoContacto />
      </div>
    </div>
  );
};

export default CardTextContacto;
