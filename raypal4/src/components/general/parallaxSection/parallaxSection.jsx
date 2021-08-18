import React, { useState, useEffect, useRef } from "react";
import { RightIn } from "../animations/animations.jsx";
import "./parallaxSection.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "react-spring";

import bush from "./illustrations/bush.png";
import sunset from "./illustrations/blue-background.jpg";
import map from "./illustrations/map.svg";
import chip from "./illustrations/chip.svg";
import cms from "./illustrations/cms.svg";
import webdev from "./illustrations/web-dev.svg";
import elements from "./illustrations/elements.svg";
import cool from "./illustrations/cool.svg";

import pythonlogo from "./logos/python.svg";
import javalogo from "./logos/java.svg";
import clogo from "./logos/C.svg";
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
            pages={7}
            id="para-cont"
            ref={(el) => {
              paraContainer = el;
            }}
          >
            <ParallaxLayer
              offset={2}
              speed={0.1}
              className="no-show-mobile"
              style={{
                transition: "all 5s ease",
              }}
            >
              <img
                src={cool}
                style={{
                  display: "block",
                  width: "20%",
                  marginLeft: "75%",
                }}
              />
            </ParallaxLayer>

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
              className="no-show-mobile"
              style={{
                transition: "all 0.5s ease",
              }}
            >
              <img
                src={elements}
                style={{
                  display: "block",
                  width: "20%",
                  marginLeft: "5%",
                }}
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
              <div className="row content-grid">
                <h1 className="center">Stack and Projects</h1>

                <div className="col s6 m6 l3">
                  <div className="cube">
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
                        href="https://www.youtube.com/watch?v=fm8bxLQ7bkY"
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
                  <div className="cube">
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
                        href="https://www.youtube.com/watch?v=eNc1Cjdc7rY"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="material-icons left">play_arrow</i>Video
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col s6 m6 l3">
                  <div className="cube">
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
                  <div className="cube">
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

                <div className="col s6 m6 l6">
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
              offset={4.5}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
                backgroundImage: `url(${webdev})`,
                backgroundSize: "auto 400px",
              }}
              className="div-background para-mobile-fix"
            ></ParallaxLayer>

            <ParallaxLayer
              offset={5.6}
              speed={0}
              style={{
                color: "white",
                transition: "all 0.1s ease",
              }}
              className="para-mobile-fix"
            >
              <div className="end-para">
                <p className="center-align">Made with love</p>
              </div>
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
