import React, { useState, useEffect, useRef } from "react";
import { RightIn } from "../animations/animations.jsx";
import "./parallaxSection.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";
import { useIntersection } from "react-use";
import gsap from "gsap";
import { isMobile } from "react-device-detect";

import bush from "./illustrations/bush.png";
import sunset from "./illustrations/blue-background.jpg";
import map from "./illustrations/map.svg";
import chip from "./illustrations/chip.svg";
import cms from "./illustrations/cms.svg";
import webdev from "./illustrations/web-dev.svg";
import cool from "./illustrations/cool.svg";
import soil from "./illustrations/soil.svg";

import pythonlogo from "./logos/python.svg";
import javalogo from "./logos/java.svg";
import clogo from "./logos/C.svg";
import kotlinlogo from "./logos/kotlin.svg";
import webtechlogo from "./logos/webTech.svg";
import wplogo from "./logos/wordpress.svg";
import mongologo from "./logos/MongoDB.svg";
import nodelogo from "./logos/nodejs.svg";
import reactlogo from "./logos/react.svg";
import { node } from "prop-types";

const ParallaxSection = () => {
  const [divScale, setdivScale] = useState(1);
  var lightisON = false;
  let paraContainer = useRef(null);
  let contentGrid = useRef(null);

  const intersection = useIntersection(contentGrid, {
    root: null,
    rootMargin: "10px",
    threshold: 0.1,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
    lightisON = true;
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.1
    ? fadeOut(".content-grid")
    : fadeIn(".content-grid");

  useEffect(() => {
    const handleScroll = () =>
      paraContainer != null ? setdivScale(paraContainer.current / 10) : void 0;

    //Workaround for binding event listener to the react spring parralax library
    const x = document.querySelector("#para-cont");
    x.addEventListener("scroll", handleScroll);
  });

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    if (!isMobile) {
      setActive(!isActive);
    }
  };

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
            pages={7}
            id="para-cont"
            ref={(el) => {
              paraContainer = el;
            }}
          >
            <ParallaxLayer offset={2.88} speed={0.5} className="no-show-mobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="bulb"
                viewBox="0 0 154.72 276.77"
              >
                <path
                  d="M55.2 139.26l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM85.62 123.84l-.5 1.67 4.63 15.48.49-1.67-4.62-15.48z"
                  className={lightisON ? "filament active" : "filament"}
                />
                <path
                  d="M90.24 139.32l-.49 1.67 4.62 15.48.5-1.67-4.63-15.48zM68.11 123.84l-.5 1.67 4.62 15.48.5-1.67-4.62-15.48z"
                  className={lightisON ? "filament active" : "filament"}
                />
                <path
                  d="M72.73 139.32l-.5 1.67 4.63 15.48.5-1.67-4.63-15.48zM58.85 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48z"
                  className={lightisON ? "filament active" : "filament"}
                />
                <path
                  d="M76.36 154.8l.5 1.67 4.63-15.48-.5-1.67-4.63 15.48zM63.48 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM80.99 139.32l.5 1.67 4.62-15.48-.49-1.67-4.63 15.48zM93.88 154.8l.49 1.67L99 140.99l-.5-1.67-4.62 15.48z"
                  className={lightisON ? "filament active" : "filament"}
                />
                <rect
                  width="2.36"
                  height="59.85"
                  x="53.05"
                  y="138.65"
                  className="prong"
                  rx="1.18"
                  ry="1.18"
                />
                <rect
                  width="2.36"
                  height="58.81"
                  x="98.3"
                  y="138.65"
                  className="prong"
                  rx="1.18"
                  ry="1.18"
                />
                <path d="M41.05 193.11h71.61v46.03H41.05z" className="cls-2" />
                <ellipse
                  cx="76.85"
                  cy="239.14"
                  className="cls-2"
                  rx="35.81"
                  ry="37.63"
                />
                <rect
                  width="83"
                  height="6.33"
                  x="276.75"
                  y="505.69"
                  className="cls-3"
                  rx="3.17"
                  ry="3.17"
                  transform="rotate(13.12 1474.696 -687.534)"
                />
                <rect
                  width="83"
                  height="6.33"
                  x="277.26"
                  y="518.19"
                  className="cls-3"
                  rx="3.17"
                  ry="3.17"
                  transform="rotate(13.12 1475.208 -675.038)"
                />
                <rect
                  width="83"
                  height="6.33"
                  x="277.51"
                  y="530.7"
                  className="cls-3"
                  rx="3.17"
                  ry="3.17"
                  transform="rotate(13.12 1475.454 -662.554)"
                />
                <rect
                  width="27.39"
                  height="6.33"
                  x="278.36"
                  y="536.89"
                  className="cls-3"
                  rx="3.17"
                  ry="3.17"
                  transform="rotate(13.12 1448.504 -656.327)"
                />
                <rect
                  width="27.47"
                  height="6.33"
                  x="330.82"
                  y="499.48"
                  className="cls-3"
                  rx="3.17"
                  ry="3.17"
                  transform="rotate(13.12 1500.99 -693.73)"
                />
                <g className="cls-4">
                  <rect
                    width="94.5"
                    height="30.6"
                    x="30.11"
                    y="169.86"
                    className={lightisON ? "cls-5 active" : "cls-5"}
                    rx="12.26"
                    ry="12.26"
                  />
                  <circle
                    cx="77.36"
                    cy="77.36"
                    r="77.36"
                    className={lightisON ? "cls-5 active" : "cls-5"}
                  />
                  <path
                    d="M16.24 124.35c4 0 13.86 40.77 13.86 57.21h94.5c0-16.44 9.88-57.21 13.86-57.21H16.24z"
                    className={lightisON ? "cls-5 active" : "cls-5"}
                  />
                </g>
              </svg>
            </ParallaxLayer>

            <ParallaxLayer
              offset={1.8}
              speed={0.5}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${soil})`,
                backgroundPosition: "50% 50%",
              }}
              factor={1.8}
            ></ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={0}
              style={{
                alignItems: "center",
                justifyContent: "center",
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
                      Hi! I'm a ICT Software Engineering Student at the
                      Singapore Institute of Technology.
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
              offset={2.99}
              speed={0.1}
              className="no-show-mobile"
              style={{
                transition: "all 0.5s ease",
              }}
            >
              <img
                src={cool}
                style={{
                  display: "block",
                  width: "20%",
                  marginLeft: "5%",
                }}
                alt="solutionism person"
              />
            </ParallaxLayer>

            <ParallaxLayer
              offset={3}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
              }}
              factor={1.8}
            >
              <div ref={contentGrid} className="row content-grid">
                <h1 className="center">Stack and Projects</h1>

                <div className="col s6 m6 l3">
                  <div
                    className={
                      (isActive ? "cube" : "cube active") +
                      (isMobile ? " mobile" : "")
                    }
                    onClick={ToggleClass}
                  >
                    <div className="flippety">
                      <img
                        className="grid-image-para"
                        alt="python logo"
                        src={pythonlogo}
                      ></img>
                      <div className="text-cont">
                        <h5>Python</h5>
                      </div>
                    </div>
                    <div className="flop">
                      <img
                        className="grid-image-inside"
                        alt="map"
                        src={map}
                      ></img>
                      <p>
                        Punggol Mapper: A Data Structure and Algorithms Project
                      </p>
                      <a
                        className="waves-effect waves-light btn red"
                        href="https://www.youtube.com/watch?v=r3Jpb537km0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="material-icons left">play_arrow</i>Video
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col s6 m6 l3">
                  <img
                    className="grid-image-para"
                    alt="java logo"
                    src={javalogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Java</h5>
                  </div>
                </div>

                <div className="col s6 m6 l3">
                  <div
                    className={
                      (isActive ? "cube" : "cube active") +
                      (isMobile ? " mobile" : "")
                    }
                    onClick={ToggleClass}
                  >
                    <div className="flippety">
                      <img
                        className="grid-image-para"
                        alt="c logo"
                        src={clogo}
                      ></img>
                      <div className="text-cont">
                        <h5>C</h5>
                      </div>
                    </div>

                    <div className="flop">
                      <img
                        className="grid-image-inside"
                        alt="chip"
                        src={chip}
                      ></img>
                      <p>Embedded Voice Controlled Door Lock</p>
                      <a
                        className="waves-effect waves-light btn red"
                        href="https://www.youtube.com/watch?v=QSWcDVKVmMI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="material-icons left">play_arrow</i>Video
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col s6 m6 l3">
                  <div
                    className={
                      (isActive ? "cube" : "cube active") +
                      (isMobile ? " mobile" : "")
                    }
                    onClick={ToggleClass}
                  >
                    <div className="flippety">
                      <img
                        className="grid-image-para"
                        alt="kotlin logo"
                        src={kotlinlogo}
                      ></img>
                      <div className="text-cont">
                        <h5>Kotlin</h5>
                      </div>
                    </div>

                    <div className="flop">
                      <img
                        className="grid-image-inside"
                        alt="map"
                        src={map}
                      ></img>
                      <p>WHALK: An Android Mobile Development Project</p>
                      <a
                        className="waves-effect waves-light btn red"
                        href="https://www.youtube.com/watch?v=DJ_jqPybkhw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="material-icons left">play_arrow</i>Video
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col s6 m6 l4">
                  <img
                    className="grid-image-para"
                    alt="web technologies"
                    src={webtechlogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Web Techs</h5>
                  </div>
                </div>

                <div className="col s6 m6 l4">
                  <div
                    className={
                      (isActive ? "cube" : "cube active") +
                      (isMobile ? " mobile" : "")
                    }
                    onClick={ToggleClass}
                  >
                    <div className="flippety">
                      <img
                        className="grid-image-para"
                        alt="wordpress"
                        src={wplogo}
                      ></img>
                      <div className="text-cont">
                        <h5>WordPress</h5>
                      </div>
                    </div>

                    <div className="flop">
                      <img
                        className="grid-image-inside"
                        alt="content management system"
                        src={cms}
                      ></img>
                      <p>Better World Singapore Portal</p>
                      <a
                        className="waves-effect waves-light btn green"
                        href="https://scout.betterworld.sg/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="material-icons left">location_on</i>Visit
                        Site!
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col s6 m6 l4">
                  <img
                    className="grid-image-para"
                    alt="react logo"
                    src={reactlogo}
                  ></img>
                  <div className="text-cont">
                    <h5>React</h5>
                  </div>
                </div>

                <div className="col s6 m6 l6">
                  <img
                    className="grid-image-para"
                    alt="node logo"
                    src={nodelogo}
                  ></img>
                  <div className="text-cont">
                    <h5>Node.js</h5>
                  </div>
                </div>

                <div className="col s12 m6 l6">
                  <img
                    className="grid-image-para"
                    alt="mongo logo"
                    src={mongologo}
                  ></img>
                  <div className="text-cont">
                    <h5>MongoDB</h5>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={4.9}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                backgroundImage: `url(${webdev})`,
                backgroundSize: "auto 60%",
                backgroundColor: "#121212",
              }}
              className="div-background para-mobile-fix"
            >
              <div className="right-cont">
                <h2>This Portfolio Project is built with</h2>
                <div className="row">
                  <div className="col s4 m4 l4">
                    <img
                      className="grid-image-para"
                      alt="web technologies"
                      src={webtechlogo}
                    ></img>
                  </div>
                  <div className="col s4 m4 l4">
                    <img
                      className="grid-image-para"
                      alt="react logo"
                      src={reactlogo}
                    ></img>
                  </div>
                  <div className="col s4 m4 l4">
                    <img
                      className="grid-image-para"
                      alt="node logo"
                      src={nodelogo}
                    ></img>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={4.35}
              speed={0.5}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${soil})`,
                backgroundPosition: "50% 50%",
              }}
              className="no-show-mobile"
              factor={1.1}
            ></ParallaxLayer>

            <ParallaxLayer
              offset={6}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
              }}
              className="para-mobile-fix"
            >
              <div className="end-para">
                <p className="center-align">
                  Made with <i class="material-icons">mood</i>
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              offset={6}
              speed={0.5}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${soil})`,
                backgroundPosition: "50% 50%",
              }}
              factor={0.8}
              className="no-show-mobile"
            ></ParallaxLayer>
          </Parallax>
        </div>,
      ].map((div, key) => (
        <RightIn key={key}>{div}</RightIn>
      ))}
    </React.Fragment>
  );
};

export default ParallaxSection;
