import { useMediaQuery } from "../hooks/useMediaQuery";
import Content from "./Content";
import ContentHeading from "./ContentHeading";
import HeroImage from "./HeroImage";
import NavigationMenu from "./NavMenu";
import Offer from "./Offer";

const Main = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <main id="main" className="container mx-auto grow md:mb-32">
      <div className="px-3 md:px-0 flex flex-col gap-4">
        {/* Hero Image */}
        {isDesktop && <HeroImage />}
        {/* Navigation Menu */}
        <NavigationMenu />
        {/* Heading of content */}
        <ContentHeading />
        {/* Content */}
        <Content />
        {!isDesktop && <Offer />}
      </div>
    </main>
  );
};

export default Main;
