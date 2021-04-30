import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../stylesheets/footer.css';
import ContactUs from './pages/ContactUs';
import Infos from './pages/Infos';
const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const themeClass = theme.isLight ? 'light' : 'darker';
  return (
    <footer className={themeClass}>
      <div className="details grid" data-aos="zoom-in">
        <Infos />
        <ContactUs />
      </div>
      <p className="copyrights">
        Copyright &copy; 2020 |{' '}
        <span>
          <span>Clothing </span>App
        </span>
      </p>
    </footer>
  );
};

export default Footer;
