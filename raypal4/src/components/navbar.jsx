import React, { Component } from "react";
import M from "materialize-css";
import "../css/app.css";
import profilePic from "../assets/profile.jpg";
import { Link } from "react-router-dom";
class NavBar extends Component {
  menuButtonClick() {
    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("active");
  }

  render() {
    const NavBarLinks = [
      {
        title: "Home",
        link: "/",
        icon: "home",
      },
      {
        title: "About",
        link: "/about",
        icon: "person",
      },
    ];

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".tooltipped");
      var instances = M.Tooltip.init(elems);
    });

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
          <i
            className="material-icons"
            id="menuBtn"
            onClick={this.menuButtonClick.bind(this)}
          >
            menu
          </i>
        </div>

        <ul className="nav-list">
          {NavBarLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="tooltipped"
                  to={item.link}
                  data-position="right"
                  data-tooltip={item.title}
                >
                  <i className="material-icons">{item.icon}</i>
                  <span className="link-name">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavBar;
