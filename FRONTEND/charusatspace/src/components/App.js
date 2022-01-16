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
import ECE from "./ECE"
import Attendance from "./Attendance";
import Contribution from "./Contribution";
import Discusion from "./Discussion";


function App() {
  return (
    <Router>
      <div>
        <Favicon url={FaviconPhotos} />
        <Header />
        <SideNav />
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
            <Discusion />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
