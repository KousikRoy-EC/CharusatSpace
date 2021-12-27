import React from 'react';
import './App.css';
import SideNav from './SideNavbar';
import Footer from "./Footer"
import Header from './Header'
import Favicon from 'react-favicon'
import FaviconPhotos from "../Photos/Logo.png"
function App() {
  return (
    <div className="App">
      <Favicon url={FaviconPhotos} />
      <Header />
      <SideNav />
      <Footer />
    </div>
  );
}

export default App;
