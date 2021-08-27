import React from "react";
import { ImageSlider } from "../imageSlider/imageSlider.jsx";

export function ProjectSection(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col s12 m7 l7">
          <div className="image-slider-fix">
            <ImageSlider pages={props.data.images} />
          </div>
        </div>
        <div className="col s12 m5 l5">
          <div className="content-cont">
            <h3>{props.data.title}</h3>
            <p>{props.data.desc}</p>
            <div className="row center">
              <div className={props.data.logoColClass[0]}>
                <img
                  className="grid-image-para"
                  alt={props.data.logoAlt[0]}
                  src={props.data.logos[0]}
                ></img>
              </div>
              <div className={props.data.logoColClass[1]}>
                <img
                  className="grid-image-para"
                  alt={props.data.logoAlt[1]}
                  src={props.data.logos[1]}
                ></img>
              </div>
              <div className={props.data.logoColClass[2]}>
                <img
                  className="grid-image-para"
                  alt={props.data.logoAlt[2]}
                  src={props.data.logos[2]}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
