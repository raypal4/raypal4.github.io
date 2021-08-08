import React, { Component } from "react";
import "./threeGrid.css";

class ThreeGrid extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="row">
            <div className="col s12 m7 l7 grid grid-1">
              <h1 className="grid-title">{this.props.title}</h1>
            </div>
            <div className="col s12 m5 l5">
              <div className="row">
                <div className="col s12 m12 l12 grid grid-2"></div>
                <div className="col s12 m12 l12 grid grid-3"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThreeGrid;
