import React, { useState, useEffect } from "react";
import { RightIn } from "../animations/animations.jsx";
import "./parallaxSection.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";
import foreground from "./bush.svg";
import sunset from "./sunset.jpg";

const ParallaxSection = () => {
  const [divScale, setdivScale] = useState(1);

  useEffect(() => {
    const x = document.querySelector("#para-cont");
    const handleScroll = () => setdivScale(x.scrollTop / 5);
    x.addEventListener("scroll", handleScroll);
  });

  const foregroundScale = useSpring({
    to: { backgroundSize: 100 + divScale + "%" },
    from: { backgroundImage: `url(${foreground})` },
  });

  return (
    <React.Fragment>
      {[
        <div className="section-body">
          <Parallax pages={3} style={{ top: "0", left: "0" }} id="para-cont">
            <ParallaxLayer
              offset={0}
              speed={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sticky={{ start: 0, end: 1 }}
            >
              <div className="cover-container">
                <animated.div
                  className="cover-background"
                  style={{ backgroundImage: `url(${sunset})` }}
                ></animated.div>
                <animated.div
                  className="cover-foreground"
                  style={foregroundScale}
                ></animated.div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} />

            <ParallaxLayer
              offset={2}
              speed={4}
              style={{ backgroundColor: "#ff6d6d" }}
            />

            <ParallaxLayer
              offset={2}
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
