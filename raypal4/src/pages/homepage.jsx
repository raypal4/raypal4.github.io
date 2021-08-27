import React, { Component } from "react";
import ThreeGrid from "../components/general/threeGrid/threeGrid.jsx";
import coffeeboy from "../assets/coffeeboy.svg";
import minions from "../assets/minions.svg";
import musicblob from "../assets/musicblob.svg";

class homepage extends Component {
  state = {};
  render() {
    return (
      <react-fragement>
        <ThreeGrid
          title="Hello There!"
          sub1="Welcome to my sandbox showcasing some cool random stuff"
          img1={coffeeboy}
          link1="/"
          title2="Projects"
          sub2="Awesome projects i got the chance to work on"
          img2={minions}
          link2="/projects"
          title3="Random Music"
          sub3="Piano songs attempted over the years, have mercy"
          img3={musicblob}
          link3="/music"
        />
      </react-fragement>
    );
  }
}

export default homepage;
