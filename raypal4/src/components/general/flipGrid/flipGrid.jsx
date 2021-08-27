import React from "react";
import "./flipGrid.css";

export function FlipGrid(props) {
  const ToggleClass = () => {
    if (!props.isMobile) {
      props.setActive(!props.isActive);
    }
  };
  return (
    <React.Fragment>
      {props.gridcolumns.map((item, index) => {
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
                  <i className="material-icons left">{item.linkicon}</i>
                  {item.buttontext}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
