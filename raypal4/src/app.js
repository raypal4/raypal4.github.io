import React, { useEffect } from "react";
import NavBar from "./components/navbar.jsx";
import HomePage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import InstaPiano from "./pages/instapiano.jsx";
import { Route, useLocation } from "react-router-dom";
import { Switch } from "react-router";
import { useTransition, animated } from "react-spring";
import BB8 from "./components/general/bb8/bb8Loader.jsx";

const App = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { position: "absolute", x: 0, y: 0, width: "100%", opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    // leave: { opacity: 0 },
    leave: (location) => async (next) => {
      await next({ x: 0.1, opacity: 1 });
      await next({ x: 50 });
      await next({ width: "0%", x: 0.1 });
      await next({ opacity: 0 });
    },
  });

  const menuButtonClickMain = () => {
    const sideBar = document.querySelector(".side-bar");
    if (sideBar.classList.contains("active")) {
      sideBar.classList.remove("active");
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    // console.log(location);
  });

  return (
    <>
      <NavBar />
      <main
        className="content-container"
        onClick={menuButtonClickMain.bind(this)}
      >
        <div className="background-loader">
          <BB8 />
          <div className="sand" />
        </div>
        {transitions((props, item, key) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route path="/music" exact component={InstaPiano}></Route>
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
};

export default App;
