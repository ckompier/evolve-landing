import { useState } from 'react';

import { WEB_NAME } from 'utils/constants';

import Header from 'components/nav/Header';
import MenuDrawer from 'components/nav/MenuDrawer';
import Footer from 'components/nav/Footer';

const Layout = ({ children }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className="min-h-screen lg:h-screen w-screen overflow-x-hidden lg:overflow-y-hidden">
      <Header
        webName={WEB_NAME}
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
      />
      <MenuDrawer
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
