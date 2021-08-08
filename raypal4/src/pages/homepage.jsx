import React, { Component } from "react";
import ThreeGrid from "../components/general/threeGrid/threeGrid.jsx";

class homepage extends Component {
  state = {};
  render() {
    return (
      <react-fragement>
        <ThreeGrid title="Welcome!" title2="title 2" title3="title 3" />
      </react-fragement>
    );
  }
}

export default homepage;
