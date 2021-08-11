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
      title: "My Music",
      link: "/music",
      icon: "music_video",
    },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    var isMobile = false; //initiate as false
    // device detection
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
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
        <div className="side-bar z-depth-1">
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
