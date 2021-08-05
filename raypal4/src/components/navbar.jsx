import React, { Component } from "react";
import M from "materialize-css";
import "../css/app.css";
import profilePic from "../assets/profile.jpg";

class NavBar extends Component {
  render() {
    return (
      <div className="side-bar z-depth-1">
        <div className="logo-content">
          <div className="logo">
            <div className="row">
              <div className="col s4">
                <img className="responsive-img" src={profilePic}></img>
              </div>
              <div className="col s8">
                <div className="logo-name">Raynold Tan</div>
                <div className="logo-subtext">SE Developer</div>
              </div>
            </div>
          </div>
          <i className="material-icons" id="menuBtn">
            menu
          </i>
        </div>

        <ul className="nav-list">
          <li>
            <a href="/">
              <i className="material-icons">home</i>
              <span className="link-name">Homepage</span>
            </a>
          </li>
          <li>
            <a href="/about">
              <i className="material-icons">person</i>
              <span className="link-name">About</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
