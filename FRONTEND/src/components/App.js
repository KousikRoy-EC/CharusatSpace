import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./SideNavbar";
import Footer from "./Footer";
import Header from "./Header";
import Favicon from "react-favicon";
import FaviconPhotos from "../Photos/Logo.png";
import Home from "./Home";
import Team from "./Team";
import CSIT from "./CSIT";
import ECE from "./ECE";
import Attendance from "./Attendance";
import Contribution from "./Contribution";
import Discusion from "./Discussion";
import { useState } from "react";

function App(props) {
  const [dis, setdis] = useState(true);

  function showFooter(val) {
    if (val === "no") {
      setdis((prev) => {
        return false;
      });
    } else if (val === "yes") {
      setdis((prev) => {
        return true;
      });
    }
  }

  return (
    <Router>
      <div>
        <Favicon url={FaviconPhotos} />
        <Header />
        <SideNav setfoot={showFooter} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Team">
            <Team />
          </Route>

          <Route exact path="/Contribute">
            <Contribution />
          </Route>

          <Route exact path="/CS">
            <CSIT />
          </Route>

          <Route exact path="/EC">
            <ECE />
          </Route>

          <Route exact path="/Attendance">
            <Attendance />
          </Route>

          <Route exact path="/Discussion">
            <Discusion
              setfoot={showFooter}
            />
          </Route>
        </Switch>
        <Footer display={dis ? "" : "none"} />
      </div>
    </Router>
  );
}




export default App;
