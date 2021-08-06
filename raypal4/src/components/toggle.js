import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <React.Fragment>
      <div className="switch" onChange={toggleTheme}>
        <label>
          <input type="checkbox"></input>
          <span className="lever"></span>
        </label>
      </div>
    </React.Fragment>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
