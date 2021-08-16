import React, { useState, useEffect } from "react";
import { RightIn } from "../animations/animations.jsx";
import "./parallaxSection.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";
import bush from "./bush.svg";
import sunset from "./blue-background.jpg";

const ParallaxSection = () => {
  const [divScale, setdivScale] = useState(1);

  useEffect(() => {
    const x = document.querySelector("#para-cont");
    const handleScroll = () => setdivScale(x.scrollTop / 10);
    x.addEventListener("scroll", handleScroll);
  });

  const foregroundAnim = useSpring({
    to: { backgroundSize: 100 + divScale + "%" },
    from: { backgroundImage: `url(${bush})` },
    config: { duration: 100 },
  });

  const backgroundAnim = useSpring({
    to: {
      opacity: 2 - divScale / 40,
      backgroundSize: 100 + divScale / 10 + "%",
    },
    from: { backgroundImage: `url(${sunset})` },
    config: { duration: 100 },
  });

  function reverser(input, valuetoreverse, reversehowmuch) {
    if (input < valuetoreverse) {
      return input;
    } else {
      return valuetoreverse - (input - valuetoreverse + reversehowmuch);
    }
  }

  const covertitleAnim = useSpring({
    to: {
      opacity: 1 - divScale / 40,
    },
    config: { duration: 100 },
  });

  const subtitleAnim = useSpring({
    to: {
      opacity: 0 + reverser(divScale, 100, 40) / 100,
    },
    config: { duration: 100 },
  });

  const drawLine = useSpring({
    to: {
      height: reverser(divScale * 2, 280, 30),
      opacity: 1 - reverser(divScale, 180, 1) / 150,
    },
  });

  return (
    <React.Fragment>
      {divScale}
      {[
        <div className="section-body">
          <Parallax pages={4} style={{ top: "0", left: "0" }} id="para-cont">
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
              }}
              sticky={{ start: 0, end: 2 }}
            >
              <div className="cover-container">
                <animated.div
                  className="cover-background"
                  style={backgroundAnim}
                ></animated.div>
                <animated.div
                  className="cover-foreground"
                  style={foregroundAnim}
                ></animated.div>
                <animated.div className="cover-title" style={covertitleAnim}>
                  <h1>ABOUT</h1>
                  <div class="icon-scroll"></div>
                </animated.div>
                <animated.div className="cover-title" style={subtitleAnim}>
                  <div className="sub">
                    <h4>Who am i?</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </animated.div>
                <div>
                  <animated.div
                    className="moving-line"
                    style={drawLine}
                  ></animated.div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} />
            <ParallaxLayer offset={2} />

            <ParallaxLayer
              offset={3}
              speed={4}
              style={{ backgroundColor: "#ff6d6d" }}
            />

            <ParallaxLayer
              offset={3}
              speed={0.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <h1>WOI</h1>
            </ParallaxLayer>
          </Parallax>
        </div>,
      ].map((div, key) => (
        <RightIn key={key}>{div}</RightIn>
      ))}
    </React.Fragment>
  );
};

export default ParallaxSection;
