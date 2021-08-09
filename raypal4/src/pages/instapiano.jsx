import React, { Component } from "react";
import InstaComponent from "../components/general/music/instaComponent.jsx";

class Instapiano extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="feed-container">
          <InstaComponent />
        </div>
      </React.Fragment>
    );
  }
}

export default Instapiano;
