import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ResponsiveHeader from "./components/ResponsiveHeader";
import { useMediaQuery } from "./hooks/useMediaQuery";

const App = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex flex-col min-h-screen">
      {isDesktop ? <Header /> : <ResponsiveHeader />}
      <Main />
      {/* {isDesktop ? <Footer /> : null} */}
      <Footer />
    </div>
  );
};

export default App;
