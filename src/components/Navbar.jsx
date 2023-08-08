
import { PrimaryButton } from "./common/Button";
import SwatLogo from "./common/SwatLogo";

const Navbar = () => {
  return (
    <div
      className="flex justify-between w-[90vw]
     mx-auto fixed top-[2rem] z-[100] bg-white p-[0.5rem] rounded-[1.25rem] items-center  "
    >
      <div className="items-center flex space-x-2">
        <SwatLogo />
        <h3 className="font-mutant hidden lg:block text-[#353535]">
          S.W.A.T <br /> LEADERSHIP ACADEMY
        </h3>
      </div>
      <ul className="space-x-6 font-medium hidden lg:flex">
        <li>
          <a href="#" className="py-2 border-b border-[#CC3C39] ">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Programs</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
     <PrimaryButton>
      Join Us
     </PrimaryButton>
    </div>
  );
};

export default Navbar;
