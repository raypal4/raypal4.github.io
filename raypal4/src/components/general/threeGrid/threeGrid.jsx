import React, { Component } from "react";
import "./threeGrid.css";
import coffeeboy from "./coffeeboy.svg";
import RT from "./RT.svg";

class ThreeGrid extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="row">
            <div className="col s12 m7 l7 grid grid-1">
              <img className="page-logo" src={RT} alt="RT" />
              <div className="content-continer">
                <img className="grid-image" src={coffeeboy} alt="CoffeeBoy" />
                <h3 className="grid-title">{this.props.title}</h3>
                <h4 className="grid-subtitle">
                  Welcome to my sandbox where i showcase some cool random stuff
                </h4>
              </div>
            </div>
            <div className="col s12 m5 l5">
              <div className="row">
                <div className="col s12 m12 l12 grid grid-2">
                  <h3 className="grid-title">{this.props.title2}</h3>
                </div>
                <div className="col s12 m12 l12 grid grid-3">
                  <h3 className="grid-title">{this.props.title3}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThreeGrid;
