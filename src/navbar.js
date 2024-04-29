import React, { useState } from "react";
import companyLogo from "./Assets/webwizards.png";

//-----------------CSS styling for the payment component-----------------

const topNavigation = {
  // Color
  backgroundColor: "#135D66",
  // Positioning and layout
  overflow: "hidden",
  marginBottom: "2em",
};

const topNavigationA = {
  // Display and typography
  display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px 40px",
  textDecoration: "none",
  fontFamily: "League Spartan",
  // Hover effect
  ":hover": {
    backgroundColor: "#1D267D",
    color: "black",
  },
};

const navlinks = {
  // Layout
  display: "flex",
  justifyContent: "center",
  // Borders
  borderLeft: "1px solid gray",
  borderRight: "1px solid gray",
  // Typography
  fontSize: "1.5em",
};

const banner = {
  // Color
  backgroundColor: "#003C43",
  color: "white",
  // Layout
  margin: "0",
  paddingTop: "1.1em",
  display: "flex",
  justifyContent: "center",
  // Borders
  borderTop: "1px solid #00224D",
};

const logoStyle = {
  width: "20%",
};

//-----------------END CSS styling for the payment component-----------------

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

  // CSS styling for the button itself
  const addComponentBtnDiv = {
    // Typography
    fontFamily: "Roboto",
    // Layout
    textAlign: "center",
    marginBottom: "5em",
  };

  const addComponentBtn = {
    // Layout
    marginTop: "2em",
    // Typography
    fontSize: "1.5em",
    fontFamily: "Roboto",
    // Color
    background: "#003C43",
    color: "white",
    // Borders
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
