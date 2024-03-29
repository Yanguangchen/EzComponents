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
  const [logoY, setLogoY] = useState("1.25em");
  const [logoSize, setLogoSize] = useState("10%"); // Assuming logoSize is a percentage for example

  const CompanyLogo = {
    zIndex: "-1",
    position: "absolute",
    left: "20.3125em",
    top: `${logoY}`, // Using state variable for vertical position
    width: `${logoSize}`, // Using state variable for width size
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

  //-----SLIDER CSS CONTROL------//
  const sliderStyle = {
    marginTop: "5em",
    marginLeft: "3em",
  };

  const sliderLabel = {
    padding: "0",
    margin: "0",
    fontFamily: "Arial",
    textAlign: "center",
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
        <div style={sliderStyle}>
          <p style={sliderLabel}>Logo Y axis</p>
          <SliderComponent initialValue={logoY} onValueChange={setLogoY} />
          <p style={sliderLabel}>Logo Size</p>
          <SliderComponent
            initialValue={logoSize}
            onValueChange={setLogoSize}
            min={10}
            max={100}
          />
        </div>
      </div>
    </div>
  );
}

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
var contactFont = "Arial"; //                    |DEFAULT ARIAL|
var contactLeftMargin = "3.8em"; //                    |DEFAULT 3.8em|
var contactMarginBottom = "0em"; //                    |DEFAULT 0em  |
//---------------EDIT PROPERTIES HERE--------------------------------|

function App() {
  const [components, setComponents] = useState([
    {
      name: "Chen Yanguang",
      title: "ReactJs Engineer",
      LogoURL: "/logos/logo512.png",
    },
    { name: "Bob", title: "Professional Son", LogoURL: "/logos/logo512.png" },
  ]);

  const addComponent = () => {
    const newUser = {
      name: `User ${components.length + 1}`,
      title: "New Role",
      LogoURL: "/logos/logo512.png",
    };
    setComponents([...components, newUser]);
  };

  const addComponentBtnDiv = {
    fontFamily: "Arial",
    textAlign: "center",
    marginBottom: "5em",
  };

  const addComponentBtn = {
    fontSize: "2em",
  }

  return (
    <div style={addComponentBtnDiv}>
      {components.map((user, index) => (
        <Namecard
          key={index}
          name={user.name}
          title={user.title}
          LogoURL={user.LogoURL}
        />
      ))}
      <button style={addComponentBtn} onClick={addComponent}>Add Component</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
