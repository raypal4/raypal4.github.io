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

import travallofront from "./travallo/travallo_front.png";
import travallo1 from "./travallo/travallo_1.png";
import travallo2 from "./travallo/travallo_2.png";
import travallo3 from "./travallo/travallo_3.png";
import travallo4 from "./travallo/travallo_4.png";

import { ImageSlider } from "../imageSlider/imageSlider.jsx";

const ParallaxSection = () => {
  const [divScale, setdivScale] = useState(1);
  var lightisON = false;
  let paraContainer = useRef(null);
  let contentGrid = useRef(null);

  const intersection = useIntersection(contentGrid, {
    root: null,
    rootMargin: "0px",
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
    const handleScroll = () => {
      if (paraContainer != null) {
        if (paraContainer.current < 200) {
          document.getElementById("navbar").style.left = "0px";
          document.getElementById("main-cont").style.left = "78px";
          document.getElementById("main-cont").style.width =
            "calc(100% - 78px)";
        } else {
          document.getElementById("navbar").style.left = "-100px";
          document.getElementById("main-cont").style.left = "0px";
          document.getElementById("main-cont").style.width = "100%";
        }
      }
      paraContainer != null ? setdivScale(paraContainer.current / 10) : void 0;
    };

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

  const gridcolumns = [
    {
      title: "Python",
      icon: pythonlogo,
      insideIcon: map,
      insideText: "Punggol Mapper: A Data Structure and Algorithms Project",
      column: "col s6 m4 l3",
      cubeclass:
        (isActive ? "cube" : "cube active") + (isMobile ? " mobile" : ""),
      linkicon: "play_arrow",
      link: "https://www.youtube.com/watch?v=r3Jpb537km0",
      buttonclass: "waves-effect waves-light btn red",
      buttontext: "Video",
    },
    {
      title: "Java",
      icon: javalogo,
      insideIcon: null,
      insideText: "",
      column: "col s6 m4 l3",
      cubeclass: "cube",
      linkicon: null,
      link: null,
      buttonclass: null,
      buttontext: null,
    },
    {
      title: "C",
      icon: clogo,
      insideIcon: chip,
      insideText: "Embedded Voice Controlled Door Lock",
      column: "col s6 m4 l3",
      cubeclass:
        (isActive ? "cube" : "cube active") + (isMobile ? " mobile" : ""),
      linkicon: "play_arrow",
      link: "https://www.youtube.com/watch?v=QSWcDVKVmMI",
      buttonclass: "waves-effect waves-light btn red",
      buttontext: "Video",
    },
    {
      title: "Kotlin",
      icon: kotlinlogo,
      insideIcon: map,
      insideText: "WHALK: An Android Mobile Development Project",
      column: "col s6 m4 l3",
      cubeclass:
        (isActive ? "cube" : "cube active") + (isMobile ? " mobile" : ""),
      linkicon: "play_arrow",
      link: "https://www.youtube.com/watch?v=DJ_jqPybkhw",
      buttonclass: "waves-effect waves-light btn red",
      buttontext: "Video",
    },
    {
      title: "Web Techs",
      icon: webtechlogo,
      insideIcon: null,
      insideText: "",
      column: "col s6 m4 l4",
      cubeclass: "cube",
      linkicon: null,
      link: null,
      buttonclass: null,
      buttontext: "",
    },
    {
      title: "WordPress",
      icon: wplogo,
      insideIcon: cms,
      insideText: "Better World Singapore Portal",
      column: "col s6 m4 l4",
      cubeclass:
        (isActive ? "cube" : "cube active") + (isMobile ? " mobile" : ""),
      linkicon: "location_on",
      link: "https://scout.betterworld.sg/",
      buttonclass: "waves-effect waves-light btn green",
      buttontext: "Visit Site!",
    },
    {
      title: "React",
      icon: reactlogo,
      insideIcon: null,
      insideText: "",
      column: "col s6 m4 l4",
      cubeclass: "cube",
      linkicon: null,
      link: null,
      buttonclass: null,
      buttontext: "",
    },
    {
      title: "Node.js",
      icon: nodelogo,
      insideIcon: null,
      insideText: "",
      column: "col s6 m4 l6",
      cubeclass: "cube",
      linkicon: null,
      link: null,
      buttonclass: null,
      buttontext: "",
    },
    {
      title: "MongoDB",
      icon: mongologo,
      insideIcon: null,
      insideText: "",
      column: "col s12 m4 l6",
      cubeclass: "cube",
      linkicon: null,
      link: null,
      buttonclass: null,
      buttontext: "",
    },
  ];

  const travallo = [travallofront, travallo1, travallo2, travallo3, travallo4];

  return (
    <React.Fragment>
      {[
        <div className="section-body">
          <Parallax
            pages={10.5}
            id="para-cont"
            ref={(el) => {
              paraContainer = el;
            }}
          >
            {/* Lightbulb */}
            <ParallaxLayer offset={2.88} speed={0.5}>
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

            {/* Soil */}
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

            {/* Cover Section */}
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

            {/* Cool guy parralax img */}
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

            {/* Stack and projects */}
            <ParallaxLayer
              offset={3.2}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
              }}
              factor={1.6}
            >
              <div ref={contentGrid} className="row content-grid">
                <h1 className="center">Stack and Projects</h1>

                {gridcolumns.map((item, index) => {
                  return (
                    <div className={item.column} key={index}>
                      <div className={item.cubeclass} onClick={ToggleClass}>
                        <div className="flippety">
                          <img
                            className="grid-image-para"
                            alt={item.title}
                            src={item.icon}
                          ></img>
                          <div className="text-cont">
                            <h5>{item.title}</h5>
                          </div>
                        </div>
                        <div className="flop">
                          <img
                            className="grid-image-inside"
                            alt={item.insideText}
                            src={item.insideIcon}
                          ></img>
                          <p>{item.insideText}</p>
                          <a
                            className={item.buttonclass}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="material-icons left">
                              {item.linkicon}
                            </i>
                            {item.buttontext}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ParallaxLayer>

            {/* Portfolio Item - 5 */}
            <ParallaxLayer
              offset={5}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                position: "relative",
                height: "150vh",
              }}
            >
              <div className="row height-fix">
                <div className="col s12 m7 l8">
                  <div className="min-height">
                    <ImageSlider pages={travallo} />
                  </div>
                </div>
                <div className="col s12 m5 l4 ">
                  <div className="exp-cont">
                    <h3>Travallo</h3>
                    <p>
                      An instagram inspired travel planner concept where liked
                      images are converted to potential travel activies. The
                      project is built on Flask and the usual web technologies
                      with MongoDB as its database solution.
                    </p>
                  </div>
                  <div className="row center">
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
                        alt="python logo"
                        src={pythonlogo}
                      ></img>
                    </div>
                    <div className="col s4 m4 l4">
                      <img
                        className="grid-image-para"
                        alt="mongodb logo"
                        src={mongologo}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            {/* Soil 4.8 */}
            <ParallaxLayer
              offset={4.7}
              speed={0.5}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${soil})`,
                backgroundPosition: "50% 50%",
              }}
              className="no-show-mobile"
              factor={1.1}
            ></ParallaxLayer>

            {/* Portfolio Item 5.1 */}
            <ParallaxLayer
              offset={5.1}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                position: "relative",
                height: "150vh",
              }}
            >
              <div className="row height-fix">
                <div className="col s12 m7 l8">
                  <div className="min-height">
                    <ImageSlider pages={travallo} />
                  </div>
                </div>
                <div className="col s12 m5 l4 ">
                  <div className="exp-cont">
                    <h3>Travallo</h3>
                    <p>
                      An instagram inspired travel planner concept where liked
                      images are converted to potential travel activies. The
                      project is built on Flask and the usual web technologies
                      with MongoDB as its database solution.
                    </p>
                  </div>
                  <div className="row center">
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
                        alt="python logo"
                        src={pythonlogo}
                      ></img>
                    </div>
                    <div className="col s4 m4 l4">
                      <img
                        className="grid-image-para"
                        alt="MongoDB logo"
                        src={mongologo}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            {/* Soil 6 */}
            <ParallaxLayer
              offset={6}
              speed={0.5}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${soil})`,
                backgroundPosition: "50% 50%",
              }}
              className="no-show-mobile"
              factor={1.1}
            ></ParallaxLayer>

            {/* Portfolio Ending Item 5.2 */}
            <ParallaxLayer
              offset={5.2}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                position: "relative",
                height: "150vh",
              }}
            >
              <div className="row height-fix center">
                <div className="col s12 m6 l6">
                  <img
                    src={webdev}
                    alt="web dev"
                    className="grid-image-big"
                  ></img>
                </div>
                <div className="col s12 m6 l6 ">
                  <h4>This Portfolio Project is built with</h4>
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
              </div>
            </ParallaxLayer>

            {/* Soil 7.9 */}
            <ParallaxLayer
              offset={7.9}
              speed={0.5}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${soil})`,
                backgroundPosition: "50% 50%",
              }}
              factor={1.1}
              className="no-show-mobile"
            ></ParallaxLayer>

            {/* Ending made with smiles 5.25*/}
            <ParallaxLayer
              offset={5.25}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                backgroundColor: "brown",
                position: "relative",
                height: "80vh",
              }}
            >
              <div className="end-para">
                <p className="center-align">
                  Made with <i className="material-icons">mood</i>
                </p>
              </div>
            </ParallaxLayer>

            {/* Soil 9.5 */}
            <ParallaxLayer
              offset={9.5}
              speed={0.5}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${soil})`,
                backgroundPosition: "50% 50%",
              }}
              factor={1.1}
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
