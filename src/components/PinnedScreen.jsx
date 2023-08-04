// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const PinningSection = () => {
  return (
    <div className="container">
      <div className="pin">
        <div className="box">
          <div className="place-center">
            <div>
              <div className="button-container">
                <div className="tag">Since 2009</div>
              </div>
              <h2 className=" text-xl lg:text-5xl">
                Over a <span className="text-[#cc3c39]" >Decade</span> of Youth Empowerment
              </h2>
            </div>
          </div>
        </div>
        <div className="box" style={{ background: "#FFD5C3" }}>
          <div className="box-container grid">
            <div className="left">
              <div className="tag">Upcoming Events</div>
              <h3 style={{ paddingTop: "2rem" }}>
                National Campus Retreat 2023
              </h3>
              <p style={{ paddingTop: "1rem" }}>
                We emphasize strategic thinking and planning, equipping future
                leaders with the ability to analyze complex situations and make
                informed decisions.
              </p>
              <div className="other" style={{ paddingTop: "2rem" }}>
                <ul>
                  <li>Date: xxxx</li>
                  <li style={{ padding: "0.8rem 0" }}>
                    Venue: xxxxxxxxx xxxxxxx xxxx
                  </li>
                  <li>Registration: xxxxxx</li>
                </ul>
              </div>
              <div style={{ padding: "3rem 0" }} className="btn-parent">
                <div className="btn">Register Now</div>
                <div className="btn" style={{ paddingLeft: "2rem" }}>
                  Learn More
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./right.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box" style={{ background: "#E9EEEA" }}>
          <div className="box-container grid">
            <div className="left">
              <div className="tag">Upcoming Events</div>
              <h3 style={{ paddingTop: "2rem" }}>Rendezvous 2023</h3>
              <p style={{ paddingTop: "1rem" }}>
                We emphasize strategic thinking and planning, equipping future
                leaders with the ability to analyze complex situations and make
                informed decisions.
              </p>
              <div className="other" style={{ paddingTop: "2rem" }}>
                <ul>
                  <li>Date: xxxx</li>
                  <li style={{ padding: "0.8rem 0" }}>
                    Venue: xxxxxxxxx xxxxxxx xxxx
                  </li>
                  <li>Registration: xxxxxx</li>
                </ul>
              </div>
              <div style={{ padding: "3rem 0" }} className="btn-parent">
                <div className="btn">Register Now</div>
                <div className="btn" style={{ paddingLeft: "2rem" }}>
                  Learn More
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./right2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="box" style={{ background: "#ECDECC" }}>
          <div className="box-container grid">
            <div className="left">
              <div className="tag">Upcoming Events</div>
              <h3 style={{ paddingTop: "2rem" }}>
                S.W.A.T Creatives Conference
              </h3>
              <p style={{ paddingTop: "1rem" }}>
                We emphasize strategic thinking and planning, equipping future
                leaders with the ability to analyze complex situations and make
                informed decisions.
              </p>
              <div className="other" style={{ paddingTop: "2rem" }}>
                <ul>
                  <li>Date: xxxx</li>
                  <li style={{ padding: "0.8rem 0" }}>
                    Venue: xxxxxxxxx xxxxxxx xxxx
                  </li>
                  <li>Registration: xxxxxx</li>
                </ul>
              </div>
              <div style={{ padding: "3rem 0" }} className="btn-parent">
                <div className="btn">Register Now</div>
                <div className="btn" style={{ paddingLeft: "2rem" }}>
                  Learn More
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./right3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PinningSection;
