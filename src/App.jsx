import React, { useState, useEffect } from "react";
import Splashscreen from "./screen/Splashscreen";
import Header from "./screen/Header";
import Body from "./screen/Body";
import './App.css';
import background from "../src/assets/background_home2.jpg";

function App() {
  const [screenDimensions, setScreenDimensions] = useState(0);
  const hadlewidth = () => {
    if (window.innerWidth < 450) {
      setScreenDimensions(1);
    } else if (window.innerWidth > 450 && window.innerWidth < 1000) {
      setScreenDimensions(2);
    } else if (window.innerWidth > 1000) {
      setScreenDimensions(3);
    } else {
      setScreenDimensions(0);
    }
    console.log("screenDimensions", screenDimensions);
  };
  // console.log("window.innerWidth : ", window.innerWidth);
  window.addEventListener("resize", hadlewidth);

  const [cek, setCek] = useState(false);
  useEffect(() => {
    hadlewidth();
    if (cek === false) {
      setTimeout(() => {
        setCek(true);
      }, 3000);
    } else {
    }
  }, []);

  //untuk edit dimana saja
  // screenDimensions === 0
  //   ? "kecil"
  //   : screenDimensions === 1
  //   ? "kecil"
  //   : screenDimensions === 2
  //   ? "sedang"
  //   : screenDimensions === 2
  //   ? "besar"
  //   : "besar";

  return cek === false ? (
    <Splashscreen />
  ) : (
    <div style={{ margin: 0 }}>
      <img
        src={background}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div className="app-div"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Header screenDimensions={screenDimensions} />
        <Body screenDimensions={screenDimensions}/>
      </div>
    </div>
  );
}

export default App;
