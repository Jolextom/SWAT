import { slideshowsPartner } from "../utils/slideshow";
import Navbar from "./Navbar";
import { PrimaryButton } from "./common/Button";
import ArrowDown from "./svgs/ArrowDown";

const HeroSection = () => {
  return (
    <div className="flex flex-col space-y-8  lg:pb-[30px] w-screen  h-screen">
      <div className="flex  bg-home_bg min-h-[400px] h-[60%] bg-no-repeat bg-cover justify-center w-full ">
        <div className="h-full flex flex-col justify-end pb-[30px]">
          {/* Hero text */}
          <div className="text-white">
            <h1 className="text-4xl font-mutant text-center lg:text-8xl">
              S.W.A.T <br />
              LEADERSHIP ACADEMY
            </h1>
            <h2 className="text-lg lg:text-2xl mt-2 font-light text-center text-[40px]">
              Empowering Tomorrow’s Leaders, Shaping the Society
            </h2>
          </div>
        </div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center gap-x-10 lg:gap-x-[100px]">
        <PrimaryButton>
            Join Us
        </PrimaryButton>
        <PrimaryButton>
            Partner
        </PrimaryButton>
      </div>
      {/* arrow */}
      <div className="flex w-full justify-center">
        <a href="#about">
            <ArrowDown />
        </a>
      </div>

      <div className=" w-full max-w-[100%] overflow-hidden gap-x-10  flex">
          <div className="flex animate-slides_linear  items-center gap-x-10 ">
            {slideshowsPartner.map(data=><img className="images block w-12      " key={data} src={data}/>)}
            </div>
      </div> 
      <div>
        <p className="text-[15px] text-center font-semibold text-[#CC3C39]">Partners Over the Years</p>
      </div>
    </div>
  );
};

export default HeroSection;
