import Vision from "./Vision";
import UniGrid from "./UniGrid";
import About from "./About"
import PinningSection from "./PinnedScreen";
import Event from "./Event";
import ParallaxSection from "./Parallel";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Vision />
      <UniGrid />
      <PinningSection />
      <Event />
      <ParallaxSection />
      <Footer />
    </>
  );
};

export default Header;
