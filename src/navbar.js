import React, { useState } from "react";
import companyLogo from "./Assets/webwizards.png";

const topNavigation = {
  backgroundColor: "#00224D",
  overflow: "hidden",
  marginBottom: "2em",
};

const topNavigationA = {
  display: "inline-block",
  color: "#f2f2f2",
  textAlign: "center",
  padding: "14px 40px",
  textDecoration: "none",
  fontFamily: "League Spartan",
  ":hover": {
    backgroundColor: "#1D267D",
    color: "black",
  },
};

const navlinks = {
  display: "flex",
  justifyContent: "center",
  borderLeft: "1px solid gray",
  borderRoght: "1px solid gray",
  fontSize: "1.5em",
};

const banner = {
  backgroundColor: "white",
  color: "white",
  margin: "0",
  padding: "0",
  display: "flex",
  justifyContent: "center",
  borderTop: "1px solid #00224D",
};

const logoStyle = {
  width: "20%",
};

function NavbarComponent() {
  return (
    <div>
      <p id={"navibar"}></p>

      <div style={banner}>
        <img src={companyLogo} style={logoStyle} alt="Company Logo" />
      </div>

      <div style={topNavigation}>
        <div style={navlinks}>
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
