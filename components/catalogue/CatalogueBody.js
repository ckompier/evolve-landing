import { motion } from 'framer-motion';

import { childVariants } from 'utils/framer';

import BodyWrapper from 'components/shared/BodyWrapper';
import BtnSocial from 'components/shared/BtnSocial';

const keywords = [
  'calidad',
  'disponibilidad',
  'garantía',
  'rendimiento',
  'feedback',
  'motivación',
  'soluciones',
  'ciencia',
];

const CatalogueBody = () => {
  return (
    <BodyWrapper>
      <motion.div variants={childVariants}>
        <p className="tw-body">
          En EVOLVE trabajamos con proveedores de primer nivel, tanto nacionales
          como internacionales, con un alto bagaje y las mejores garantías del
          mercado. Nos avala el rigor científico y la experiencia de trabajar
          diariamente con los productos que ofrecemos en nuestro centro de
          entrenamiento. Desde EVOLVE queremos ofrecerte las mejores condiciones
          para que puedas traerte a casa o a tu negocio la última tendencia en
          material deportivo. Si lo que buscas no está en nuestro catálogo,
          ¡pregúntanos! Estamos dispuestos a cubrir cualquier necesidad de
          nuestros clientes.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-between mt-6 lg:mt-6"
        variants={childVariants}
      >
        {keywords.map((word) => (
          <span className="font-bold uppercase text-gray-600 text-sm lg:text-base">
            {word}
          </span>
        ))}
      </motion.div>

      <motion.div className="mt-12 lg:mt-12" variants={childVariants}>
        <BtnSocial
          link="https://linktr.ee/EVOLVE_SPORT_MATERIAL"
          label="catálogo."
        />
      </motion.div>
    </BodyWrapper>
  );
};

export default CatalogueBody;
