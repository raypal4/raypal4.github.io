import React from "react";
import { func, string } from "prop-types";

const Toggle = ({ theme, toggleTheme }) => {
  window.addEventListener("load", function () {
    //dom is fully loaded, but maybe waiting on images & css files
    theme == "dark"
      ? (document.getElementById("switchCB").checked = true)
      : (document.getElementById("switchCB").checked = false);
  });

  return (
    <React.Fragment>
      <div id="darkModeSwitch" className="switch" onChange={toggleTheme}>
        <label>
          <input id="switchCB" type="checkbox"></input>
          <span className="lever"></span>
        </label>
        <i className="material-icons">wb_sunny</i>
      </div>
    </React.Fragment>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
