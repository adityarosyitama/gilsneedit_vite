import backGroundImage from "../assets/background_splashscreen.jpg";
import React from "react";
function Splashscreen() {
  return (
    <>
      <img
        src={backGroundImage}
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
      <div
        style={{
          height: "90lvh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1
          className="Splashscreen_title"
          style={{
            fontSize: 80,
            fontFamily: "Beau Rivage",
            fontWeight: "bold",
          }}
        >
          Welcome To Gilsneedit
        </h1>
      </div>
    </>
  );
}
export default Splashscreen;
