import React from "react";
import M from "materialize-css";
import "../app.css";
import profilePic from "../assets/profile.jpg";
import { Link } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./darkmode/globalstyle.jsx";
import { lightTheme, darkTheme } from "./darkmode/theme.jsx";
import { DarkMode } from "./darkmode/darkmode.jsx";
import Toggle from "./darkmode/toggle.jsx";

const NavBar = () => {
  const menuButtonClick = () => {
    const sideBar = document.querySelector(".side-bar");
    sideBar.classList.toggle("active");
  };

  const [theme, themeToggler] = DarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const NavBarLinks = [
    {
      title: "Home",
      link: "/",
      icon: "home",
    },
    // {
    //   title: "About",
    //   link: "/about",
    //   icon: "person",
    // },
    {
      title: "Music",
      link: "/music",
      icon: "music_video",
    },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    var isMobile = false; //initiate as false
    // device detection
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      isMobile = true;
    }
    var elems = document.querySelectorAll(".tooltipped");

    if (isMobile === false) {
      M.Tooltip.init(elems);
    }
  });

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="side-bar z-depth-1" id="navbar">
          <div className="logo-content">
            <div className="logo">
              <div className="row">
                <div className="col s4">
                  <img
                    className="responsive-img"
                    src={profilePic}
                    alt="Profile"
                    width="640"
                    height="360"
                  ></img>
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
              onClick={menuButtonClick.bind(this)}
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

            <li
              className="tooltipped"
              data-position="right"
              data-tooltip="Dark Mode"
            >
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </li>
          </ul>
        </div>
      </>
    </ThemeProvider>
  );
};

export default NavBar;
