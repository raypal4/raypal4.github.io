import React, { Component } from "react";
import "./threeGrid.css";
import RT from "./RT.svg";

class ThreeGrid extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="row">
            <div className="col s12 m7 l7 grid grid-1">
              <img className="page-logo" src={RT} alt="RT" />
              <div className="content-continer">
                <img
                  className="grid-image"
                  src={this.props.img1}
                  alt="Coffee Boi"
                />
                <h3 className="grid-title">{this.props.title}</h3>
                <h4 className="grid-subtitle">{this.props.sub1}</h4>
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
