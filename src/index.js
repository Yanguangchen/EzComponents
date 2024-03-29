/////////////////////////////////////////////////////////////////////////
//                      NAME CARD COMPONENTS                           //
/////////////////////////////////////////////////////////////////////////

//--------------MODULES-----------------//
import React, { useState } from "react"; // Import React and useState together
import ReactDOM from "react-dom/client";
import SliderComponent from "./sliderComponent"; // Ensure the path is correct
//--------------------------------------//

function Namecard(props) {
  ///////////////////////////////////////////////////////////////
  //                     INLINE CSS STYLES                     //
  ///////////////////////////////////////////////////////////////
  //OUTER CONTAINER
  const OuterContainer = {
    display: "flex",
    flexDirection: "row", // Stack vertically
  };

  //OUTERCONTAINER CSS----------//
  const defaultNamecardStyle = {
    //DISPLAY
    marginTop: "2em",
    //BORDERS
    border: "1px solid black",
    borderRadius: "0.725em",
    //SIZING
    width: "25em",
    height: "12.5em",
    //TEXT
    textAlign: "center",
    position: "relative",
  };

  //NAME-----------------------//
  const CardName = {
    //TEXT
    fontFamily: fontName,
    textAlign: "left",
    fontFamily: "Arial",
    fontSize: "120%",
    fontWeight: "600",
    color: "black",

    //SIZING AND POSITIONING
    //MARGINS
    marginLeft: "1.25em",
    marginTop: "0.625em",
    marginBottom: "0",
    overflow: "none",
  };

  //bg image of card
  const BackgroundImage = {
    //POSITIONNG
    zIndex: "-2",
    position: "absolute",
    left: "0",
    //SIZING
    width: "25em",
    height: "12.5em",
  };

  //logo of the company
  const [logoY, setLogoY] = useState("1.25");

  const CompanyLogo = {
    zIndex: "-1",
    //POSITIONING
    position: "absolute",
    left: "20.3125em",
    top: logoY,
    //SIZING
    width: logoSize,
  };

  //TITLE OF USER
  const Title = {
    //POSITIONING
    textAlign: "left",
    marginLeft: titleLeftMargin,
    marginTop: "0.1875em",
    //FONT SETTINGS
    fontFamily: fontTitle,
    fontSize: titleSize,
    color: "gray",
  };

  //CONTACT DETAILS
  const Number = {
    //FONT SETTINGS
    textAlign: "left",
    fontFamily: contactFont,
    //POSITIONING
    marginTop: "3.8em",
    marginLeft: contactLeftMargin,
    marginBottom: contactMarginBottom,
  };

  const Website = {
    //FONT SETTINGS
    textAlign: "left",
    fontFamily: contactFont,
    //POSITIONING
    marginTop: "0.7em",
    marginLeft: contactLeftMargin,
    marginBottom: contactMarginBottom,
  };

  const location = {
    //POSITIONING
    textAlign: "left",
    marginTop: "0.6em",
    marginLeft: contactLeftMargin,
    marginBottom: contactMarginBottom,
    //FONT SETTINGS
    fontFamily: contactFont,
  };
  //---------------------INLINE CSS STYLES---------------------//

  return (
    <div style={OuterContainer}>
      <div style={defaultNamecardStyle}>
        <img
          style={BackgroundImage}
          src="/nameCards/default.png"
          alt="Default Namecard"
        />
        <img style={CompanyLogo} src={props.LogoURL} alt="company logo"></img>

        <p style={CardName}>{props.name}</p>
        <p style={Title}>{props.title}</p>
        <div>
          <p style={Number}>82872532</p>
          <p style={Website}>www.facebook.com</p>
          <p style={location}>128 Bedok North</p>
        </div>
      </div>
      <div>
        <SliderComponent initialValue={logoY} onValueChange={setLogoY} />
        <SliderComponent initialValue={logoY} onValueChange={setLogoY} />
      </div>
    </div>
  );
}
//----------CARD INFORMATION DEFAULT VALUES
//Enter information here

//Name ontop of card
var userName = "Chen Yanguang";
//Title of card name
var title = "ReactJs Engineer";
//Path of the lgo
var logoPath = "/logos/logo512.png";

//----------CUSTOMIZABLE DIMENSIONS------------------//
//COMPANY LOGO//
var logoSize = "10%"; //DEFAULT 10%
//----------NAME-------------------------------------//
var fontName = "Arial"; //DEFAULT ARIAL
var fontTitle = "monospace"; //DEFAULT MONOSPACE
//---------TITLE-------------------------------------//
var titleSize = "90%"; //DEFUALT 80%
var titleLeftMargin = "2.1em"; //DEFAULT 2.1em
//-------CONTACT-----------------------------------------------------|
var contactFont = "Arial";       //                    |DEFAULT ARIAL|
var contactLeftMargin = "3.8em"; //                    |DEFAULT 3.8em|
var contactMarginBottom = "0em"; //                    |DEFAULT 0em  |
//---------------EDIT PROPERTIES HERE--------------------------------|
const defaultNameCard = (
  <Namecard name={userName} title={title} LogoURL={logoPath} />
);
const user1 = (
  <Namecard name="Bob" title="professional son" LogoURL={logoPath} />
);
const user2 = (
  <Namecard name="Alexa" title="Voice Assistant" LogoURL={logoPath} />
);
//--------------------------------------------------------------//
//////////////////////////////////////////////////////////////////
//                    R E N D E R                               //
//////////////////////////////////////////////////////////////////
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {defaultNameCard}
    {user1}
    {user2}
  </>
);
