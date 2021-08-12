import React, { Component, useState } from "react";
import { RightIn } from "../animations/animations.jsx";
import "./parallaxSection.css";
import { InView } from "react-intersection-observer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Trail, animated } from "react-spring";

const ParallaxSection = () => {
  //   constructor(props) {
  //     super(props);
  //     this.state = { divHeight: 0 };
  //   }

  //   componentDidMount() {
  //     const x = document.querySelector("#para-cont");
  //     x.addEventListener("scroll", this.resizeHeaderOnScroll);
  //     console.log(window);
  //     console.log(this);
  //   }

  //   resizeHeaderOnScroll() {
  //     // const x = document.querySelector("#para-cont");
  //     // let scrollTop = x.scrollTop,
  //     //   minHeight = 30,
  //     //   newdivHeight = Math.max(minHeight, 200 - scrollTop);
  //     console.log(ParallaxSection);

  //     // this.setState({
  //     //   divHeight: newdivHeight,
  //     // });
  //   }

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const x = document.querySelector("#para-cont");

    let scrollTop = x.scrollTop,
      minHeight = 30,
      newdivHeight = Math.max(minHeight, 200 - scrollTop);
    const handleScroll = () => setScrollY(window.scrollY);
    x.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, [debounce]);

  return (
    <React.Fragment>
      {[
        <div className="section-body">
          <Parallax pages={3} style={{ top: "0", left: "0" }} id="para-cont">
            <ParallaxLayer
              offset={0}
              speed={2.5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              sticky={{ start: 0, end: 1 }}
            >
              <h1>About</h1>
              <div id="box" className="test" style={{ height: 10 }}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} />

            <ParallaxLayer
              offset={2}
              speed={4}
              style={{ backgroundColor: "#ff6d6d" }}
            />

            <ParallaxLayer
              offset={2}
              speed={0.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <h1>WOI</h1>
            </ParallaxLayer>
          </Parallax>
        </div>,
      ].map((div, key) => (
        <RightIn key={key}>{div}</RightIn>
      ))}
    </React.Fragment>
  );
};

export default ParallaxSection;
