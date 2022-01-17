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

function App() {
  const [notes, setNotes] = useState([
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
    },
  ]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function HandlingComments(params) {

  }

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
            <Discusion onAdd={addNote} Pnotes={notes} onDelete={deleteNote} commentmod={HandlingComments} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
