import React, { useState } from "react";
import about from "../data";

const About = () => {
  const [info, setinfo] = useState(about);
  const [currentState, setcurrentState] = useState(0);
  const { id, title, char, paragraph, img } = info[currentState];

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
          <div className="second grid">
            <div>
              <h2>{title}</h2>
              <p>{paragraph}</p>
              <button className="btn">Learn More</button>
            </div>
            <div className="img-container">
              <img src={`/img${currentState}.png`} alt="" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
