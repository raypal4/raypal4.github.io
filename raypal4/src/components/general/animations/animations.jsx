import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSpring, animated, to, useTransition } from "react-spring";

const presetdelay = 4000;

export const SqueezeSpring = ({ children }) => {
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

export const LeftIn = ({ children }) => {
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

export const RightIn = ({ children }) => {
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

export const BtmIn = ({ children }) => {
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
