const { useState, useMemo, Fragment } = React;
const { useSpring, animated, interpolate, config, useTrail } = ReactSpringHooks;

const Hello = ["H", "e", "l", "l", "o"];
const World = ["W", "o", "r", "l", "d"];

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 135 },
    opacity: 1,
    x: 1,
    y: 1,

    from: {
      opacity: 0,
      x: 0,
      y: 0,
    },
  });
  return (
    <>
      {trail.map(({ x, y, ...rest }, index) => (
        <animated.div
          key={items[index]}
          className="trails-text"
          style={{
            ...rest,
            transform: interpolate(
              [
                x.interpolate({
                  range: [0, 0.9, 1],
                  output: [0, 1.2, 1],
                }),
                y.interpolate({
                  range: [0, 0.9, 1],
                  output: [0, 0.8, 1],
                }),
              ],
              (x, y) => `scale(${x},${y})`
            ),

            // r.interpolate((r) => `rotate(${r}deg)`)
          }}
        >
          {items[index]}
        </animated.div>
      ))}
    </>
  );
}

const SqueezeSpring = ({ children }) => {
  const [state, toggle] = useState(false);
  const { x, y } = useSpring({
    from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
    to: { x: 1, y: 1 },
    config: { mass: 0.5, tension: 120, friction: 2, precision: 0.001 },
    reset: state,
    onStart: (state) => toggle(false),
  });

  return (
    <animated.div
      onMouseEnter={() => toggle(true)}
      style={{
        transform: interpolate(
          [
            x.interpolate({
              range: [0, 0.3, 1],
              output: [1, 1.3, 1],
            }),
            y.interpolate({
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

const App = () => {
  return (
    <h1 class="header">
      <Trail>
        {Hello.map((word) => (
          <SqueezeSpring className="letter">{word}</SqueezeSpring>
        ))}{" "}
        &nbsp;&nbsp;
        {World.map((word) => (
          <SqueezeSpring>{word}</SqueezeSpring>
        ))}
      </Trail>
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
