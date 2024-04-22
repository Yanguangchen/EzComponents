import React, { useState } from "react";

const topNavigation = {
  backgroundColor: "#1D267D",
  overflow: "hidden",
  marginBottom: "2em",
};

const topNavigationA = {
  float: "left",
  display: "block",
  color: "#f2f2f2",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  fontFamily: "roboto",
  ":hover": {
    backgroundColor: "#1D267D",
    color: "black",
  },
};

const banner = {
  backgroundColor: "#0C134F",
  color: "white",
  margin: "0",
  padding: "0",
};

const h1Div = {
  margin: "0",
  paddingBottom: "1em",
  paddingTop: "3em",
};

function NavbarComponent() {
  return (
    <div>
      <p id={"navibar"}></p>

      <div style={banner}>
        <h1 style={h1Div}> COMPANY LOGO HERE</h1>
      </div>

      <div style={topNavigation}>
        <a style={topNavigationA} href="#home">
          Home
        </a>
        <a style={topNavigationA} href="#news">
          News
        </a>
        <a style={topNavigationA} href="#contact">
          Contact
        </a>
        <a style={topNavigationA} href="#about">
          About
        </a>
      </div>
    </div>
  );
}

function NavbarApp() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const addComponentBtnDiv = {
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: "5em",
  };
  //---CSS styling for the button itself
  const addComponentBtn = {
    marginTop: "2em",
    fontSize: "1.5em",
    fontFamily: "Roboto",
    background: "black",
    color: "white",
    borderRadius: "50px",
  };

  return (
    <div>
      {[...Array(count)].map((_, i) => (
        <NavbarComponent key={i} />
      ))}
      <div style={addComponentBtnDiv}>
        <button style={addComponentBtn} onClick={handleClick}>
          +++Generate Navbar+++
        </button>
      </div>
    </div>
  );
}

export default NavbarApp;
