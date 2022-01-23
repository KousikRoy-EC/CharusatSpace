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
      comment: ["Hello", "Kousik", "Roy"],
      L: 18,
      DL: 10,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: ["Hello", "Kishan", "Roy", "Hello", "Kishan", "Roy"],
      L: 87,
      DL: 67,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: ["Hello Aman Roy", "Hello", "Kishan", "Roy", "Hello", "Kishan", "Roy"],
      L: 23,
      DL: 41,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
      comment: ["Hello Riya Roy", "Hello", "Kishan", "Roy", "hello"],
      L: 45,
      DL: 63,
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

  function HandlingComments(comm, id) {
    setNotes((prevNotes) => {
      prevNotes[id].comment.push(comm);
      return [...prevNotes]
    })
  }


  function setLDL(id, op, value) {
    if (op === "L+") {
      setNotes((prevNotes) => {
        prevNotes[id].L = value;
        return [...prevNotes];
      })
    }
    else if (op === "L-") {
      setNotes((prevNotes) => {
        prevNotes[id].L = value;
        return [...prevNotes]
      })
    }
    else if (op === "DL+") {
      setNotes((prevNotes) => {
        prevNotes[id].DL = value;
        return [...prevNotes]
      })
    }
    else if (op === "DL-") {
      setNotes((prevNotes) => {
        prevNotes[id].DL = value;
        return [...prevNotes]
      })
    }
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
            <Discusion onLDL={setLDL} onAdd={addNote} Pnotes={notes} onDelete={deleteNote} commentmod={HandlingComments} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
