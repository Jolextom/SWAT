import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const UniGrid = () => {
  const object1Ref = useRef(null);
  const object2Ref = useRef(null);

  useEffect(() => {
    const object1Element = object1Ref.current;
    const object2Element = object2Ref.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const targetRef =
          entry.target === object1Element ? ".animate" : ".count";
        const targetValue = entry.isIntersecting
          ? entry.target === object1Element
            ? 45
            : 10000
          : 0;

        gsap.to(targetRef, {
          innerText: targetValue,
          snap: "innerText",
          duration: entry.isIntersecting ? "2" : "1",
        });
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(object1Element);
    observer.observe(object2Element);

    return () => {
      observer.unobserve(object1Element);
      observer.unobserve(object2Element);
    };
  }, []);

  return (
    <>
      <div className="grid-container">
        <div>
          <img src="./uni6.png" alt="" />
          <img src="./uni9.png" alt="" />
          <img src="./uni10.png" alt="" />
          <img src="./uni11.png" alt="" />
          <img src="./uni12.png" alt="" />
          <img src="./uni13.png" alt="" />
          <img src="./uni14.png" alt="" />
          <img src="./uni15.png" alt="" />
          <img src="./uni16.png" alt="" />
          <h3>
            Over{" "}
            <span className="animate" ref={object1Ref}>
              0
            </span>{" "}
            <br />
            <i className="color"> Global</i> Schools
          </h3>
          <img src="./uni17.png" alt="" />
          <img src="./uni20.png" alt="" />
          <img src="./uni21.png" alt="" />
          <img src="./uni22.png" alt="" />
          <img src="./uni23.png" alt="" />
          <img src="./uni24.png" alt="" />
          <img src="./uni25.png" alt="" />
          <h4>
            Over{" "}
            <span className="count" ref={object2Ref}>
              0
            </span>{" "}
            <br /> Participants
          </h4>
          <img src="./uni26.png" alt="" />
          <img src="./uni29.png" alt="" />
          <img src="./uni30.png" alt="" />
          <img src="./uni31.png" alt="" />
          <img src="./uni32.png" alt="" />
          <img src="./uni6.png" alt="" />
          <img src="./uni6.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default UniGrid;
