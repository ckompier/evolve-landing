import { motion } from 'framer-motion';

import SocialItem from 'components/contact/SocialItem';
import PageWrapper from 'components/shared/PageWrapper';

const ContactSocials = () => {
  return (
    <motion.section
      className="w-full lg:w-2/5 lg:h-screen flex flex-col space-y-6 lg:space-y-12 2xl:space-y-14 justify-center border border-gray-300"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <SocialItem
        label="email."
        link="mailto:lokismind@gmail.com"
        name="evolvesportmaterial@gmail.com"
      />

      <SocialItem label="teléfono." link="tel:+34687465810" name="687465810" />

      <SocialItem
        label="instagram."
        link="https://www.instagram.com/evolve_material_deportivo/"
        name="@evolve_material_deportivo"
      />
    </motion.section>
  );
};

export default ContactSocials;
