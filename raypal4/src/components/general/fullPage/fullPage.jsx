import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./fullPage.css";
import { ProjectSection } from "../projectSection/projectSection";
import { FlipGrid } from "../flipGrid/flipGrid.jsx";
import { isMobile } from "react-device-detect";
import { RightIn } from "../animations/animations.jsx";

import travallofront from "../parallaxSection/travallo/travallo_front.png";
import travallo1 from "../parallaxSection/travallo/travallo_1.png";
import travallo2 from "../parallaxSection/travallo/travallo_2.png";
import travallo3 from "../parallaxSection/travallo/travallo_3.png";
import travallo4 from "../parallaxSection/travallo/travallo_4.png";

import hnh1 from "../parallaxSection/hnh/hnh1.png";
import hnh2 from "../parallaxSection/hnh/hnh2.png";
import hnh3 from "../parallaxSection/hnh/hnh3.png";
import hnh4 from "../parallaxSection/hnh/hnh4.png";
import hnh5 from "../parallaxSection/hnh/hnh5.png";
import hnh6 from "../parallaxSection/hnh/hnh6.png";

import webdev from "../parallaxSection//illustrations/web-dev.svg";

import pythonlogo from "../parallaxSection//logos/python.svg";
import clogo from "../parallaxSection//logos/C.svg";
import kotlinlogo from "../parallaxSection//logos/kotlin.svg";
import webtechlogo from "../parallaxSection//logos/webTech.svg";
import wplogo from "../parallaxSection/logos/wordpress.svg";
import mongologo from "../parallaxSection//logos/MongoDB.svg";
import gluonlogo from "../parallaxSection//logos/gluon-logo.svg";
import mxnetlogo from "../parallaxSection//logos/mxnet_logo.png";

import chip from "../parallaxSection//illustrations/chip.svg";
import cms from "../parallaxSection//illustrations/cms.svg";
import map from "../parallaxSection//illustrations/map.svg";

export const FullPage = () => {
  const [isActive, setActive] = useState("false");

  const gridcolumns = [
    {
      title: "Python",
      icon: pythonlogo,
      insideIcon: map,
      insideText: "Punggol Mapper: A Data Structure and Algorithms Project",
      column: "col s6 m6 l6",
      cubeclass:
        (isActive ? "cube" : "cube active") + (isMobile ? " mobile" : ""),
      linkicon: "play_arrow",
      link: "https://www.youtube.com/watch?v=r3Jpb537km0",
      buttonclass: "waves-effect waves-light btn red",
      buttontext: "Video",
    },
    {
      title: "C",
      icon: clogo,
      insideIcon: chip,
      insideText: "Embedded Voice Controlled Door Lock",
      column: "col s6 m6 l6",
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
      column: "col s6 m6 l6",
      cubeclass:
        (isActive ? "cube" : "cube active") + (isMobile ? " mobile" : ""),
      linkicon: "play_arrow",
      link: "https://www.youtube.com/watch?v=DJ_jqPybkhw",
      buttonclass: "waves-effect waves-light btn red",
      buttontext: "Video",
    },
    {
      title: "WordPress",
      icon: wplogo,
      insideIcon: cms,
      insideText: "Better World Singapore Portal",
      column: "col s6 m6 l6",
      cubeclass:
        (isActive ? "cube" : "cube active") + (isMobile ? " mobile" : ""),
      linkicon: "location_on",
      link: "https://scout.betterworld.sg/",
      buttonclass: "waves-effect waves-light btn green",
      buttontext: "Visit Site!",
    },
  ];

  const travalloData = {
    title: "Travallo",
    desc: "An instagram inspired travel planner concept where liked images are converted to potential travel activies. The project is built on Flask and the usual web technologies with MongoDB as its database solution.",
    logos: [webtechlogo, pythonlogo, mongologo],
    logoAlt: ["webtechlogo", "pythonlogo", "mongologo"],
    logoColClass: ["col s4 m4 l4", "col s4 m4 l4", "col s4 m4 l4"],
    images: [travallofront, travallo1, travallo2, travallo3, travallo4],
  };

  const hnhData = {
    title: "Hotdog not Hotdog",
    desc: "Computer vision project inspired by the comedy Silicon Valley where one of the characters made a AI project that detects if an object is a hotodog or not. After watching that, i decided to try it on my own!",
    logos: [mxnetlogo, pythonlogo, gluonlogo],
    logoAlt: ["mxnetlogo", "pythonlogo", "gluonlogo"],
    logoColClass: ["col s6 m6 l6", "col s6 m6 l6", "col s12 m12 l12"],
    images: [hnh1, hnh2, hnh3, hnh4, hnh5, hnh6],
  };

  return (
    <React.Fragment>
      {[
        <ReactFullpage
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000} /* Options here */
          navigation
          render={({ state, fullpageApi }) => {
            return (
              <div className="fullpage-cont" id="fp-cont">
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <div className="row">
                      <div className="col s6 m6 l6">
                        <img
                          src={webdev}
                          alt="development"
                          className="hero-image"
                        />
                      </div>
                      <div className="col s6 m6 l6">
                        <h1 className="hero-text">Projects</h1>
                      </div>
                    </div>
                  </div>
                  ,
                  <div className="section">
                    <ProjectSection data={travalloData} />
                  </div>
                  <div className="section">
                    <ProjectSection data={hnhData} />
                  </div>
                  <div className="section">
                    <h1 className="title center">
                      Project Videos and Websites
                    </h1>
                    <div className="row content-grid">
                      <FlipGrid
                        gridcolumns={gridcolumns}
                        isMobile={isMobile}
                        setActive={setActive}
                        isActive={isActive}
                      />
                    </div>
                  </div>
                </ReactFullpage.Wrapper>
              </div>
            );
          }}
        />,
      ].map((div, key) => (
        <RightIn key={key}>{div}</RightIn>
      ))}
      ;
    </React.Fragment>
  );
};
