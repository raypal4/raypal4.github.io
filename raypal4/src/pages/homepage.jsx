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
        <div className="home-body">
          <ThreeGrid
            title="Why Hello There!"
            sub1="Welcome to my sandbox where i showcase some cool random stuff"
            img1={coffeeboy}
            link1="/"
            title2="Projects"
            sub2="Awesome projects i have worked on with amazing people"
            img2={minions}
            link2="/"
            title3="Some Random Music"
            sub3="Piano songs i have attempted over the years, have mercy"
            img3={musicblob}
            link3="/music"
          />
        </div>
      </react-fragement>
    );
  }
}

export default homepage;
