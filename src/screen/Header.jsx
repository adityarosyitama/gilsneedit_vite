function Header({ screenDimensions }) {
  console.log("screenDimensions:", screenDimensions);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: screenDimensions === 0 || screenDimensions === 1
        ? "center"
        : screenDimensions === 2
        ? "space-between"
        : screenDimensions === 3
        ? "space-between"
        : "space-between",
        backgroundColor:"rgba(255, 192, 203, 0.7)",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <Title screenDimensions={screenDimensions}/>
    </div>
  );
}


function Title({screenDimensions}){
  return(<div
    style={{ fontFamily: "Beau Rivage", fontWeight: "bold", fontSize: screenDimensions === 0
    ? 25
    : screenDimensions === 1
    ? 25
    : screenDimensions === 2
    ? 30
    : screenDimensions === 2
    ? 50
    : 50, }}
  >
    Gilsneedit
  </div>)
}

export default Header;