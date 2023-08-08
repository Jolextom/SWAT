import { useState } from "react";
import about from "../data";

const About = () => {
  const [info] = useState(about);
  const [currentState, setcurrentState] = useState(0);
  const { title, paragraph } = info[currentState];

  return (
    <div className="about grow" id="about">
      <article>
        <div className="first">
          <div className="wrapper">
            {info.map((item, index) => {
              return (
                <div
                  className="pointer"
                  key={index}
                  onMouseEnter={() => setcurrentState(index)}
                  onMouseLeave={() => setcurrentState(0)}
                >
                  {index === currentState ? (
                    <div className="active">
                      <h1 className="char">{item.char}</h1>
                      <h4 className="tag">{item.title}</h4>
                    </div>
                  ) : (
                    <>
                      <h1 className="char">{item.char}</h1>
                      <h4 className="tag">{item.title}</h4>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div
            className="rounded-lg lg:rounded-[3.1rem] bg-white min-h-[70vh] mt-0 lg:mx-12
          pt-[5rem]   lg:px-[4rem] pb-6 flex flex-col lg:grid px-6  lg:grid-cols-2
          "
          >
            <div className="flex flex-col space-y-3 lg:space-y-5 order-2">
              <h1 className="font-bold text-2xl lg:text-5xl">{title}</h1>
              <p className=" text-sm lg:text-base">{paragraph}</p>
              <button className="btn max-w-[183px]">Learn More</button>
            </div>
            <div className="img-container order-1">
              <img src={`/img${currentState}.png`} alt="" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
