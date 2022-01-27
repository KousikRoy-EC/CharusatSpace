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
  const [dis, setdis] = useState(true);
  const [notes, setNotes] = useState([
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 18,
      DL: 10,
      time: 1643011821849,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 87,
      DL: 67,
      time: 1643011821849,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 23,
      DL: 41,
      time: 1643011821849,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 45,
      DL: 63,
      time: 1643011821849,
    },
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 18,
      DL: 10,
      time: 1643011821849,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 87,
      DL: 67,
      time: 1643011821849,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 23,
      DL: 41,
      time: 1643011821849,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 45,
      DL: 63,
      time: 1643011821849,
    },
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 18,
      DL: 10,
      time: 1643011821849,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 87,
      DL: 67,
      time: 1643011821849,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 23,
      DL: 41,
      time: 1643011821849,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 45,
      DL: 63,
      time: 1643011821849,
    },
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 18,
      DL: 10,
      time: 1643011821849,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 87,
      DL: 67,
      time: 1643011821849,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 23,
      DL: 41,
      time: 1643011821849,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 45,
      DL: 63,
      time: 1643011821849,
    },
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 18,
      DL: 10,
      time: 1643011821849,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 87,
      DL: 67,
      time: 1643011821849,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 23,
      DL: 41,
      time: 1643011821849,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 45,
      DL: 63,
      time: 1643011821849,
    },
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 18,
      DL: 10,
      time: 1643011821849,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 87,
      DL: 67,
      time: 1643011821849,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 23,
      DL: 41,
      time: 1643011821849,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 45,
      DL: 63,
      time: 1643011821849,
    },
    {
      Name: "Kousik Roy",
      Email: "kaushikroy1001@gmail.com",
      Post: "Hey,there I am kousik studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 18,
      DL: 10,
      time: 1643011821849,
    },
    {
      Name: "Kishan Roy",
      Email: "Kishanroy1001@gmail.com",
      Post: "Hey,there I am Kishan studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 87,
      DL: 67,
      time: 1643011821849,
    },
    {
      Name: "Aman Roy",
      Email: "Amanroy1001@gmail.com",
      Post: "Hey,there I am Aman studying in charusat university.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 23,
      DL: 41,
      time: 1643011821849,
    },
    {
      Name: "Riya Roy",
      Email: "Riyaroy1001@gmail.com",
      Post: "Hey,there I am Riya studying in charusat university this one only.",
      comment: [
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
        { name: "Kousik Roy", email: "kaushikroy1001@gmail.com", content: "Hello Riya Roy", tm: 1643011821849 },
      ],
      L: 45,
      DL: 63,
      time: 1643011821849,
    },
  ]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

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

  function HandlingComments(comentobj, id) {
    const { Name, Email, content: comm, value } = comentobj;
    setNotes((prevNotes) => {
      prevNotes[id].comment.push({ name: Name, email: Email, content: comm, tm: value });
      return [...prevNotes];
    });
  }

  function setLDL(id, op, value) {
    if (op === "L+") {
      setNotes((prevNotes) => {
        prevNotes[id].L = value;
        return [...prevNotes];
      });
    } else if (op === "L-") {
      setNotes((prevNotes) => {
        prevNotes[id].L = value;
        return [...prevNotes];
      });
    } else if (op === "DL+") {
      setNotes((prevNotes) => {
        prevNotes[id].DL = value;
        return [...prevNotes];
      });
    } else if (op === "DL-") {
      setNotes((prevNotes) => {
        prevNotes[id].DL = value;
        return [...prevNotes];
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
              onLDL={setLDL}
              onAdd={addNote}
              Pnotes={notes}
              onDelete={deleteNote}
              commentmod={HandlingComments}
            />
          </Route>
        </Switch>
        <Footer display={dis ? "" : "none"} />
      </div>
    </Router>
  );
}

export default App;
