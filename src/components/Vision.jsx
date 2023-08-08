import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Vision = () => {
  const lettersRef = useRef([]);

  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top 80%",
        end: "bottom 50%",
      },
      color: "#2A2A2A",
      duration: 10,
      stagger: {
        each: 1, // Adjust the stagger amount to control the delay between each letter
        from: "start",
      },
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const text =
    "To Build a Generation of Dynamic, Hardworking men and women with character, Honor and Self Discipline";
  return (
    <>
      <div className="reveal">
        <div className="text-center text-3xl font-black lg:text-[3rem]">Our Vision</div>
        <div ref={triggerRef}>
          <div
            className="mx-auto w-[100%] py-[3rem] text-center lg:w-[70%]"
          >
            {text.split("").map((letter, index) => {
              return (
                <span
                  className="reveal-text"
                  key={index}
                  ref={(el) => (lettersRef.current[index] = el)}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Vision;
