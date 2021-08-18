import React, { useState, useEffect, useRef } from "react";
import { RightIn } from "../animations/animations.jsx";
import "./parallaxSection.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";

import bush from "./bush.png";
import sunset from "./blue-background.jpg";
import pythonlogo from "./logos/python.svg";
import javalogo from "./logos/java.svg";
import cpplogo from "./logos/cpp.svg";
import kotlinlogo from "./logos/kotlin.svg";
import webtechlogo from "./logos/webTech.svg";
import wplogo from "./logos/wordpress.svg";
import mongologo from "./logos/MongoDB.svg";

import nodelogo from "./logos/nodejs.svg";
import reactlogo from "./logos/react.svg";

const ParallaxSection = () => {
  const [divScale, setdivScale] = useState(1);
  let paraContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () =>
      paraContainer != null ? setdivScale(paraContainer.current / 10) : void 0;

    //Workaround for binding event listener to the react spring parralax library
    const x = document.querySelector("#para-cont");
    x.addEventListener("scroll", handleScroll);
  });

  function reverser(input, valuetoreverse, reversehowmuch) {
    if (input < valuetoreverse) {
      return input;
    } else if (valuetoreverse - (input - valuetoreverse + reversehowmuch) < 0) {
      return 0;
    } else {
      return valuetoreverse - (input - valuetoreverse + reversehowmuch);
    }
  }

  const foregroundAnim = useSpring({
    transform:
      "scale3d(" +
      reverser(1 + divScale / 100, 2, 1) +
      "," +
      reverser(1 + divScale / 100, 2, 1) +
      ",1)",
    opacity: 2 - divScale / 40,
    from: { backgroundImage: `url(${bush})` },
    config: { duration: 100 },
  });

  const backgroundAnim = useSpring({
    to: {
      opacity: 2 - divScale / 40,
      transform:
        "scale3d(" +
        reverser(1 + divScale / 150, 2, 1) +
        "," +
        reverser(1 + divScale / 150, 2, 1) +
        ",1)",
    },
    from: { backgroundImage: `url(${sunset})` },
    config: { duration: 100 },
  });

  const covertitleAnim = useSpring({
    to: {
      opacity: 1 - divScale / 40,
    },
    config: { duration: 100 },
  });

  const subtitleAnim = useSpring({
    to: {
      opacity: 0 + reverser(divScale, 100, 10) / 100,
    },
    config: { duration: 100 },
  });

  const drawLine = useSpring({
    to: {
      height: reverser(divScale, 130, 30) / 3 + "%",
      opacity: 1 - reverser(divScale, 180, 1) / 200,
    },
    delay: 100,
  });

  return (
    <React.Fragment>
      {[
        <div className="section-body">
          <Parallax
            pages={6}
            style={{ top: "0", left: "0" }}
            id="para-cont"
            ref={(el) => {
              paraContainer = el;
            }}
          >
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
                  <div className="icon-scroll"></div>
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
                <animated.div
                  className="moving-line"
                  style={drawLine}
                ></animated.div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={3}
              speed={0.1}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                backgroundColor: "black",
              }}
              factor={1.8}
            >
              <div className="row content-grid">
                <h1>stuff</h1>

                <div className="col s4 m3 l3">
                  <img
                    className="grid-image-para"
                    alt="python logo"
                    src={pythonlogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Python</h5>
                  </div>
                </div>
                <div className="col s4 m3 l3">
                  <img
                    className="grid-image-para"
                    alt="java logo"
                    src={javalogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Java</h5>
                  </div>
                </div>
                <div className="col s4 m3 l3">
                  <img
                    className="grid-image-para"
                    alt="cpp logo"
                    src={cpplogo}
                  ></img>
                  <div className="text-cont">
                    <h5>C++</h5>
                  </div>
                </div>
                <div className="col s6 m3 l3">
                  <img
                    className="grid-image-para"
                    alt="kotlin logo"
                    src={kotlinlogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Kotlin</h5>
                  </div>
                </div>
                <div className="col s6 m4 l4">
                  <img
                    className="grid-image-para"
                    alt="web technologies"
                    src={webtechlogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Web Techs</h5>
                  </div>
                </div>
                <div className="col s6 m4 l4">
                  <img
                    className="grid-image-para"
                    alt="wordpress"
                    src={wplogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Wordpress</h5>
                  </div>
                </div>
                <div className="col s6 m4 l4">
                  <img
                    className="grid-image-para"
                    alt="mongodb logo"
                    src={mongologo}
                  ></img>
                  <div className="text-cont">
                    <h5>MongoDB</h5>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={4.8}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                backgroundColor: "black",
              }}
              factor={1.8}
            >
              <h1>WOI 2</h1>
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
