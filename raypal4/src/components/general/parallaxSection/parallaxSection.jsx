import React, { Component, useState, useEffect } from "react";
import { RightIn } from "../animations/animations.jsx";
import "./parallaxSection.css";
import { InView } from "react-intersection-observer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Trail, animated } from "react-spring";

const ParallaxSection = () => {
  const [divWidth, setdivWidth] = useState(200);

  useEffect(() => {
    const x = document.querySelector("#para-cont");
    const handleScroll = () => setdivWidth(Math.max(30, 200 - x.scrollTop));
    x.addEventListener("scroll", handleScroll);
  });

  return (
    <React.Fragment>
      {[
        <div className="section-body">
          <Parallax pages={3} style={{ top: "0", left: "0" }} id="para-cont">
            <ParallaxLayer
              offset={0}
              speed={2.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sticky={{ start: 0, end: 1 }}
            >
              <h1>About</h1>
              <animated.div
                className="test"
                style={{ height: 200, width: divWidth }}
              ></animated.div>
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
