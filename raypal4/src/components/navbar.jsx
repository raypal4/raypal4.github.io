import React, { Component } from "react";
import M from "materialize-css";
import "../css/app.css";

class NavBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="logo-content">
          <div className="logo"> Logo </div>
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
