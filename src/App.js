import logo from './logo.svg';
import './App.css';
import AnimatedBg from "./components/AnimatedBg/AnimatedBg.jsx"
import Home from "./components/Home/Home.jsx";
import Response from "./components/Response/Response.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import { Howl, Howler } from "howler";


function App() {
  let soundtrack ={
    bg: new Howl({
      src: ["ET.mp3"],
      autoplay: true
    })
  }
  return (
    <div className="mainContainer">
      <AnimatedBg/>
      <div className="bodyContainer">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/response/" element={<Response />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
