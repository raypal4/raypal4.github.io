import React, { useEffect, useContext } from "react";
import NavBar from "./components/navbar.jsx";
import HomePage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import InstaPiano from "./pages/instapiano.jsx";
import { Route, useLocation } from "react-router-dom";
import { __RouterContext, Switch } from "react-router";
import { useTransition, animated } from "react-spring";

const App = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    enter: { x: 0, y: 0, width: "100%" },
    leave: { opacity: 1 },
    // leave: (location) => async (next) => {
    //   await next({ x: -100 });
    //   await next({ width: "0%" });
    //   await next({ opacity: 0 });
    // },
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
