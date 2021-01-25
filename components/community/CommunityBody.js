import { motion } from 'framer-motion';

import { childVariants } from 'utils/framer';

import BodyWrapper from 'components/shared/BodyWrapper';
import BtnSocial from 'components/shared/BtnSocial';

const CommunityBody = () => {
  return (
    <BodyWrapper>
      <motion.div variants={childVariants}>
        <p>
          Desde el equipo de Evolve Sport Material tenemos un compromiso con la
          actividad física y la salud. Por este motivo, queremos que formes
          parte de nuestra comunidad. En nuestras redes sociales podrás
          encontrar lo último para la práctica de ejercicio físico, además de
          consejos y estudios constatados sobre actividad física que podrás
          utilizar en tu día a día. Así que no pierdas ni un segundo y síguenos
          en Instagram.
        </p>
      </motion.div>

      <motion.div className="mt-6" variants={childVariants}>
        <BtnSocial
          link="https://www.instagram.com/evolve_material_deportivo/"
          label="instagram."
        />
      </motion.div>
    </BodyWrapper>
  );
};

export default CommunityBody;
