import React from "react";
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

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="showcase">
          <Navbar />
          <img src={Bg} className="showcaseImg" alt="children's of God" />
          <h1>
            S.W.A.T <br />
            Leadership Academy
          </h1>
          <p>
            Empowering Tomorrow’s Leaders,
            <br /> Shaping the Society
          </p>
        </div>
        <div className="cta flex">
          <button className="btn">Join Us</button>
          <button className="btn">Partner</button>
        </div>
        <div className="flex center next">
          <a href="#about">
            {" "}
            <img src={arrowSvg} alt="next page arrow down" />
          </a>
        </div>
        <div className="logos">
          <div className="logos-slide ">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
            <img src={Logo6} alt="" />
            <img src={Logo7} alt="" />
            <img src={Logo14} alt="" />
            <img src={Logo17} alt="" />
            <img src={Logo18} alt="" />
            <img src={Logo19} alt="" />
          </div>
          <div className="logos-slide">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
            <img src={Logo6} alt="" />
            <img src={Logo7} alt="" />
            <img src={Logo14} alt="" />
            <img src={Logo17} alt="" />
            <img src={Logo18} alt="" />
            <img src={Logo19} alt="" />
          </div>
        </div>
      </div>
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
