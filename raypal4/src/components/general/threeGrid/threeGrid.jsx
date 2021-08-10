import React, { useState, Component } from "react";
import "./threeGrid.css";
import RT from "./RT.svg";
import { Link, useLocation } from "react-router-dom";
import { useSpring, animated, to, useTransition } from "react-spring";

class ThreeGrid extends Component {
  render() {
    const presetdelay = 0;
    const SqueezeSpring = ({ children }) => {
      const [state, toggle] = useState(false);
      const { x, y } = useSpring({
        from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
        to: [{ x: 1, y: 1 }],
        config: { mass: 0.5, tension: 120, friction: 2, precision: 0.001 },
        reset: state,
        onStart: (state) => toggle(false),
      });

      return (
        <animated.div
          onMouseEnter={() => toggle(true)}
          style={{
            transform: to(
              [
                x.to({
                  range: [0, 0.3, 1],
                  output: [1, 1.3, 1],
                }),
                y.to({
                  range: [0, 0.3, 1],
                  output: [1, 0.7, 1],
                }),
              ],
              (x, y) => `scale(${x},${y})`
            ),
          }}
        >
          {children}
        </animated.div>
      );
    };

    const LeftIn = ({ children }) => {
      const loc = useLocation();
      const trans = useTransition(loc, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: presetdelay,
      });
      return trans((style, item) =>
        item ? <animated.div style={style}>{children}</animated.div> : ""
      );
    };

    const RightIn = ({ children }) => {
      const loc = useLocation();
      const trans = useTransition(loc, {
        from: { x: 100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: presetdelay,
      });
      return trans((style, item) =>
        item ? <animated.div style={style}>{children}</animated.div> : ""
      );
    };

    const BtmIn = ({ children }) => {
      const loc = useLocation();
      const trans = useTransition(loc, {
        from: { x: 0, y: 800, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: presetdelay,
      });
      return trans((style, item) =>
        item ? <animated.div style={style}>{children}</animated.div> : ""
      );
    };

    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="row">
            {[
              <Link to={this.props.link1}>
                <div className="col s12 m7 l7 grid grid-1">
                  <img className="page-logo" src={RT} alt="RT" />
                  <div className="content-continer">
                    <img
                      className="grid-image"
                      src={this.props.img1}
                      alt="Coffee Boi"
                    />
                    <h4 className="grid-title">
                      <div className="jeader">
                        {this.props.title.split("").map((word, key) => (
                          <SqueezeSpring key={key}>{word}</SqueezeSpring>
                        ))}
                      </div>
                    </h4>
                    <h4 className="grid-subtitle">{this.props.sub1}</h4>
                  </div>
                </div>
              </Link>,
            ].map((div, key) => (
              <LeftIn key={key}>{div}</LeftIn>
            ))}

            <div className="col s12 m5 l5">
              <div className="row">
                {[
                  <Link to={this.props.link2}>
                    <div className="col s12 m12 l12 grid grid-2">
                      <div className="content-continer">
                        <img
                          className="side-image"
                          src={this.props.img2}
                          alt="minions"
                        />
                        <h4 className="grid-title">
                          <div className="jeader">
                            {this.props.title2.split("").map((word, key) => (
                              <SqueezeSpring key={key}>{word}</SqueezeSpring>
                            ))}
                          </div>
                        </h4>
                        <h5 className="grid-subtitle">{this.props.sub2}</h5>
                      </div>
                    </div>
                  </Link>,
                ].map((div, key) => (
                  <RightIn key={key}>{div}</RightIn>
                ))}

                {[
                  <Link to={this.props.link3}>
                    <div className="col s12 m12 l12 grid grid-3">
                      <div className="content-continer">
                        <img
                          className="side-image"
                          src={this.props.img3}
                          alt="musicblob"
                        />
                        <h4 className="grid-title">
                          <div className="jeader">
                            {this.props.title3.split("").map((word, key) => (
                              <SqueezeSpring key={key}>{word}</SqueezeSpring>
                            ))}
                          </div>
                        </h4>
                        <h5 className="grid-subtitle">{this.props.sub3}</h5>
                      </div>
                    </div>
                  </Link>,
                ].map((div, key) => (
                  <BtmIn key={key}>{div}</BtmIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThreeGrid;
