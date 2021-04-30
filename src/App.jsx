import NavBar from './components/NavBar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ThemeContextProvider from './contexts/ThemeContext';
import ContactUsContextProvider from './contexts/ContactUsContext';
const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <NavBar />
        <Header />
        <Body />
        <ContactUsContextProvider>
          <Footer />
        </ContactUsContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
