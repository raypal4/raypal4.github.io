import React, { Component } from "react";
import M from "materialize-css";
import "./headerTitle.css";

class HeaderTitle extends Component {
  state = {};
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems);
    });

    return (
      <React.Fragment>
        <h1 className="header-title-center">{this.props.title}</h1>
        <div className="parallax-container">
          <div className="parallax">
            <img src="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderTitle;
