import Header from 'components/nav/Header';
import Footer from 'components/nav/Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
