import React, { useEffect, useState } from "react";
import logo from "../../src/assets/Logo_gilsneedit.png";
import "./Body.css";
import img1 from "../../src/assets/image_1.png";
import img2 from "../../src/assets/image_2.png";
import img3 from "../../src/assets/image_3.png";
import img4 from "../../src/assets/image_4.png";
import img5 from "../../src/assets/image_5.png";
import img6 from "../../src/assets/image_6.png";
import img7 from "../../src/assets/image_7.png";
import img8 from "../../src/assets/image_8.png";
import img9 from "../../src/assets/image_9.png";
import img10 from "../../src/assets/image_10.png";
import img11 from "../../src/assets/image_11.png";
import img12 from "../../src/assets/image_12.png";
import img13 from "../../src/assets/image_13.png";
import img14 from "../../src/assets/image_14.png";
import img15 from "../../src/assets/image_15.png";
import img16 from "../../src/assets/image_16.png";
import img17 from "../../src/assets/image_17.png";
import instagram from "../../src/assets/icon_instagram.png";
import shopee from "../../src/assets/icon_shopee.png";

function Body({ screenDimensions }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagePaths = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imagePaths.length
          ? 0
          : (prevIndex + 1) % imagePaths.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const image = imagePaths[currentImageIndex];

  return (
    <div
      style={{
        paddingLeft: "3%",
        paddingRight: "3%",
        display: "flex",
        flexDirection:
          screenDimensions === 0 || screenDimensions === 1
            ? "row"
            : screenDimensions === 2
            ? "column"
            : screenDimensions === 3
            ? "column"
            : "column",
        // height: "100%",
        justifyContent: "center",
      }}
    >
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <Main screenDimensions={screenDimensions} />
        {screenDimensions === 0 || screenDimensions === 1 ? (
          ""
        ) : (
          <Right
            screenDimensions={screenDimensions}
            image={image}
            currentImageIndex={currentImageIndex}
          />
        )}
      </div>
    </div>
  );
}

function Main({ screenDimensions }) {
  return (
    <div
      className="main-div"
      style={{
        alignItems: "center",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: 5,
        paddingTop:
          screenDimensions === 0 || screenDimensions === 1 ? "5%" : "",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "80%",
          height:
            screenDimensions === 0 || screenDimensions === 1
              ? "40%"
              : screenDimensions === 2
              ? "60%"
              : screenDimensions === 3
              ? "60%"
              : "60%",
          objectFit: "contain",
          borderRadius: "50%",
          borderWidth: 1,
        }}
      />
      <div style={{ marginTop: "5%", fontWeight: "bold", fontSize: 40 }}>
        Gilsneeditt
      </div>
      <div style={{ marginTop: "5%" }}>
        Skincare Skintific Originote Pigeon Klaten
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
        <ButtonLink
          LinkIconImage={instagram}
          LinkConect={"https://www.instagram.com/gilsneeditt"}
          text={"instagram"}
          screenDimensions={screenDimensions}
        />
        <ButtonLink
          LinkIconImage={shopee}
          LinkConect={"https://shopee.co.id/gilsneedit"}
          text={"shopee"}
          screenDimensions={screenDimensions}
        />
      </div>
    </div>
  );
}

function Right({ image, currentImageIndex }) {
  return <div
  className="right-div"
  style={{
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }}
>
  <img
    src={image}
    alt={`Image ${currentImageIndex + 1}`}
    style={{ height: "90%", objectFit: "contain" }}
  />
</div>
}

function ButtonLink({ LinkIconImage, LinkConect, text, screenDimensions }) {
  const size = screenDimensions === 0 || screenDimensions === 1 ? 80 : 70;
  return (
    <div style={{ width: size, height: size }}>
      <a href={LinkConect} target="_blank" rel="noopener noreferrer">
        <img
          src={LinkIconImage}
          alt={text}
          width={"100%"}
          height={"100%"}
          style={{ alignSelf: "center" }}
        />
      </a>
    </div>
  );
}

export default Body;
