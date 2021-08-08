import React, { Component } from "react";
import ThreeGrid from "../components/general/threeGrid/threeGrid.jsx";
import coffeeboy from "../assets/coffeeboy.svg";

class homepage extends Component {
  state = {};
  render() {
    return (
      <react-fragement>
        <ThreeGrid
          title="Hello world! I'm Ray!"
          sub1="Welcome to my sandbox where i showcase some cool random stuff"
          img1={coffeeboy}
          title2="In Progress..."
          sub2=""
          img2=""
          title3="In Progress..."
          sub3=""
          img3=""
        />
      </react-fragement>
    );
  }
}

export default homepage;
