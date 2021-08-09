import React, {
  useEffect,
  useState,
  Component,
  useContext,
  Switch,
} from "react";
import NavBar from "./components/navbar.jsx";
import HomePage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import InstaPiano from "./pages/instapiano.jsx";
import { Route, useLocation } from "react-router-dom";
import { __RouterContext } from "react-router";
import { useTransition, animated } from "react-spring";

const App = () => {
  var { location } = useContext(__RouterContext);

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuButtonClickMain = () => {
    const sideBar = document.querySelector(".side-bar");
    if (sideBar.classList.contains("active")) {
      sideBar.classList.remove("active");
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log(location);
  });

  return (
    <>
      <NavBar />
      <main
        className="content-container"
        onClick={menuButtonClickMain.bind(this)}
      >
        {transitions((props, item) => (
          <animated.div style={props}>
            <switch location={item}>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route path="/music" exact component={InstaPiano}></Route>
            </switch>
          </animated.div>
        ))}
      </main>
    </>
  );
};

export default App;
