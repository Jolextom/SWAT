import Navbar from "./Navbar";
import About from "./About";
import Vision from "./Vision";
import UniGrid from "./UniGrid";
import PinningSection from "./PinnedScreen";
import Event from "./Event";
import ParallaxSection from "./Parallel";
import Footer from "./Footer";
import Bg from "../assets/home_bg.png";
import arrowSvg from "../assets/arrow.svg";
import Logo1 from "../assets/1.png";
import Logo2 from "../assets/2.png";
import Logo3 from "../assets/3.png";
import Logo4 from "../assets/4.png";
import Logo5 from "../assets/5.png";
import Logo6 from "../assets/6.png";
import Logo7 from "../assets/7.png";
import Logo14 from "../assets/14.png";
import Logo17 from "../assets/17.png";
import Logo18 from "../assets/18.png";
import Logo19 from "../assets/19.png";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <>
      <HeroSection />
      {/* <About /> */}
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
