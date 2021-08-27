import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./fullPage.css";
import { ProjectSection } from "../projectSection/projectSection";

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

import pythonlogo from "../parallaxSection/logos/python.svg";
import mongologo from "../parallaxSection/logos/MongoDB.svg";
import webtechlogo from "../parallaxSection/logos/webTech.svg";
import gluonlogo from "../parallaxSection/logos/gluon-logo.svg";
import mxnetlogo from "../parallaxSection/logos/mxnet_logo.png";

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
  images: [hnh1, hnh2, hnh3, hnh4, hnh5],
};

export const FullPage = () => (
  <ReactFullpage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    navigation
    render={({ state, fullpageApi }) => {
      return (
        <div className="fullpage-cont">
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1</p>
            </div>
            <div className="section">
              <ProjectSection data={travalloData} />
            </div>
            <div className="section">
              <ProjectSection data={hnhData} />
            </div>
          </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
);
