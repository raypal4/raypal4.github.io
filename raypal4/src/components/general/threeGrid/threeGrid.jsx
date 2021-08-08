import React, { Component } from "react";
import "./threeGrid.css";
import RT from "./RT.svg";
import { Link } from "react-router-dom";

class ThreeGrid extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="row">
            <Link to="/">
              <div className="col s12 m7 l7 grid grid-1">
                <img className="page-logo" src={RT} alt="RT" />
                <div className="content-continer">
                  <img
                    className="grid-image"
                    src={this.props.img1}
                    alt="Coffee Boi"
                  />
                  <h4 className="grid-title">{this.props.title}</h4>
                  <h4 className="grid-subtitle">{this.props.sub1}</h4>
                </div>
              </div>
            </Link>

            <div className="col s12 m5 l5">
              <div className="row">
                <Link to="/">
                  <div className="col s12 m12 l12 grid grid-2">
                    <div className="content-continer">
                      <img
                        className="side-image"
                        src={this.props.img2}
                        alt="minions"
                      />
                      <h4 className="grid-title">{this.props.title2}</h4>
                      <h5 className="grid-subtitle">{this.props.sub2}</h5>
                    </div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="col s12 m12 l12 grid grid-3">
                    <div className="content-continer">
                      <img
                        className="side-image"
                        src={this.props.img3}
                        alt="musicblob"
                      />
                      <h4 className="grid-title">{this.props.title3}</h4>
                      <h5 className="grid-subtitle">{this.props.sub3}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThreeGrid;
