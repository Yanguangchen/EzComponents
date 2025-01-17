/////////////////////////////////////////////////////////////////////////
//                      NAME CARD COMPONENTS                           //
/////////////////////////////////////////////////////////////////////////

//--------------MODULES-----------------//
import React, { useState } from "react"; // Import React and useState together
import ReactDOM from "react-dom/client";
import SliderComponent from "./sliderComponent"; // Ensure the path is correct
import { PaymentComponent, PaymentApp } from "./payment";
import AccordionComponent from "./accordion";
import RequirementsVideo from "./requirementsVideo";
import NavbarComponent from "./navbar";
import VideoComponentWrapper from "./video";
import FooterApp from "./footer";
import GridContainer from "./gridContainer";
import GridApp2 from "./gridContainer2";
import GridApp1 from "./gridContainer1";
import PhysicsComponent from "./physics";
import ColorCycleComponent from "./ColorCycle";
import ColorCycleBgComponent from "./ColorCyclBg";
import HorizontalBanner from "./HorizontalBanner";

//--------------------------------------//

function Namecard(props) {
  ///////////////////////////////////////////////////////////////
  //                     INLINE CSS STYLES                     //
  ///////////////////////////////////////////////////////////////
  //OUTER CONTAINER
  const OuterContainer = {
    display: "flex",
    flexDirection: "row", // Stack vertically
    justifyContent: "center",
    marginBottom: "2em",
    columnGap: "2em",
  };

  //OUTERCONTAINER CSS----------//
  const defaultNamecardStyle = {
    //DISPLAY
    marginTop: "2em",
    //BORDERS
    border: "1px solid gray",
    borderRadius: "0.725em",
    //SIZING
    width: "25em",
    height: "12.5em",
    //TEXT
    textAlign: "center",
    position: "relative",
    objectFit: "scale-down",
  };

  //NAME-----------------------//
  const CardName = {
    //TEXT
    fontFamily: fontName,
    textAlign: "left",
    fontSize: "120%",
    fontWeight: "600",

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
    animation: "rotate360 5s linear infinite", // 5s duration, linear timing, infinite loop
  };

  //TITLE OF USER
  const Title = {
    //POSITIONING
    textAlign: "left",
    marginLeft: titleLeftMargin,
    marginTop: "0.7em",
    //FONT SETTINGS
    fontFamily: fontTitle,
    fontSize: titleSize,
    color: "#003C43",
  };

  //CONTACT DETAILS
  const Number = {
    //FONT SETTINGS
    textAlign: "left",
    fontFamily: contactFont, //DEFAULT: Roboto
    //POSITIONING
    marginTop: "3.8em",
    marginLeft: contactLeftMargin, //DEFAULT 3.8em
    marginBottom: contactMarginBottom,
    fontSize: "0.9em",
  };

  const Website = {
    //FONT SETTINGS
    textAlign: "left",
    fontFamily: contactFont, //DEFAULT: Roboto
    //POSITIONING
    marginTop: "0.7em",
    marginLeft: contactLeftMargin, //DEFAULT 3.8em
    marginBottom: contactMarginBottom,
    fontSize: "0.9em",
  };

  const location = {
    //POSITIONING
    textAlign: "left",
    marginTop: "0.6em",
    marginLeft: contactLeftMargin, //DEFAULT 3.8em
    marginBottom: contactMarginBottom,
    //FONT SETTINGS
    fontFamily: contactFont, //DEFAULT: Roboto
    fontSize: "0.9em",
  };

  //-----SLIDER CSS CONTROL------//
  const sliderStyle = {
    marginTop: "5em",
    marginLeft: "5em",
    marginRight: "5em",
    margin: "0",
  };

  const sliderLabel = {
    padding: "0",
    margin: "0",
    fontFamily: "League Spartan",
    textAlign: "center",
  };

  const cardBack = {
    width: "100%",

    //SIZING
    width: "25em",
    height: "12.5em",
    marginTop: "2em",
  };

  const video = {
    width: "100%",
    height: "12.6em",
    border: "1px solid black",
    paddingBottom: "3px",
    borderRadius: "0.825em",
  };

  //---------------------INLINE CSS STYLES---------------------//

  return (
    <div style={OuterContainer} className="namecardComponent">
      <div style={defaultNamecardStyle}>
        <img
          style={BackgroundImage}
          src="nameCards/default.png"
          alt="Default Namecard"
        />
        <img style={CompanyLogo} src={props.LogoURL} alt="company logo"></img>

        <p style={CardName}>{props.name}</p>
        <p style={Title}>{props.title}</p>
        <div>
          <p style={Number}>{props.number}</p>
          <p style={Website}>{props.url}</p>
          <p style={location}>{props.location}</p>
        </div>
      </div>
      <div style={sliderStyle} className="sliderNameCard">
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
      <div style={cardBack} className="cardBack">
        <video
          style={video}
          src="nameCards/cardBack.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
}
//----------------------------------------------------//
//            C S S    V A R I A B L E S              //
//----------------------------------------------------//
//----------CUSTOMIZABLE DIMENSIONS-------------------//
//COMPANY LOGO
var logoSize = "10%"; // DEFAULT 10%
//-------NAME-----------------------------------------//
var fontName = "League Spartan"; // DEFAULT Roboto
var fontTitle = "League Spartan"; // DEFAULT MONOSPACE
//-------TITLE----------------------------------------//
var titleSize = "90%"; // DEFUALT 80%
var titleLeftMargin = "2.1em"; // DEFAULT 2.1em
//-------CONTACT--------------------------------------//
var contactFont = "Roboto"; // DEFAULT Roboto
var contactLeftMargin = "3.8em"; // DEFAULT 3.8em
var contactMarginBottom = "0em"; // DEFAULT 0em
//---------------EDIT PROPERTIES HERE-------------------------------------|

function App() {
  //Initilize npm dependancy: random-number in range//
  var rando = require("random-number-in-range");
  //------------UNIQUE-NAMES GENERATOR-----------------------------------//
  const {
    uniqueNamesGenerator,
    adjectives,
    colors,
    animals,
    names,
  } = require("unique-names-generator"); //
  //-------RANDOM NAME VAR WITH adjectives + colors + animals------------//
  const randomName = uniqueNamesGenerator({
    //
    dictionaries: [adjectives, colors, animals],
  }); // e.g big_red_donkey
  //-------GENERATE RANDOM DOMAIN NAMES----------------------------------//
  const randomURL = uniqueNamesGenerator({ dictionaries: [adjectives] });
  //---------------------------------------------------------------------//

  //-------------------------------------------------//
  //              PRESET COMPONENTS                  //
  //          COMPONENTS ARE RENDERED BY DEFAULT     //
  //-------------------------------------------------//
  const [components, setComponents] = useState([
    {
      name: `${randomName}`, //add a var random name
      //-------------------------------------------------//
      title: "Job Title 1", //add job title
      //-------------------------------------------------//
      LogoURL: "logos/logo512.png", //url for the company logo
      //-------------------------------------------------//
      number: `+65 ${rando(8, 9) + Math.random().toString().slice(4, 11)}`, //set random number to phone number, all numbers must start with 8 or 9 and have 9 digits, country
      //-------------------------------------------------//
      url: `www.${randomURL + rando(1, 200)}.com`, //set all URL to start with www. domain name is set using randomURL variable (outputs random names) followed by random numbers(1 to 200)
      //-------------------------------------------------//
      location: `${rando(1, 401)}  ${randomURL} Ave, blk ${rando(
        //random number + ave + blk + random block number + random unit number + s + random 6 digit number (postal code)
        0,
        9
      )} #${rando(1, 30)}-${rando(0, 600)} S${rando(1, 1000000)} `,
    },
    //-----------SECOND PRESET COMPONENT FOLLOWS THE CONVENTIONS ABOVE
    {
      name: `${randomName}`,
      //-------------------------------------------------//
      title: "Job Title 2",
      //-------------------------------------------------//
      LogoURL: "logos/logo512.png",
      //-------------------------------------------------//
      number: `+65 ${rando(8, 9) + Math.random().toString().slice(4, 11)}`,
      //-------------------------------------------------//
      url: `www.${randomURL + rando(1, 200)}.com`,
      //-------------------------------------------------//
      location: `${rando(1, 401)}  ${randomURL} Ave, blk ${rando(
        0,
        9
      )} #${rando(1, 30)}-${rando(0, 600)} S${rando(1, 1000000)} `,
      //-------------------------------------------------//
    },
  ]);

  /////////////////////////////////////////////////
  //          ADD NEW COMPONENTS                 //
  /////////////////////////////////////////////////

  const addComponent = () => {
    const newUser = {
      name: `${randomName}`,
      //-------------------------------------------------//
      title: `Job Title ${components.length + 1}`,
      //-------------------------------------------------//
      LogoURL: "logos/logo512.png",
      //-------------------------------------------------//
      number: `+65 ${rando(8, 9) + Math.random().toString().slice(4, 11)}`,
      //-------------------------------------------------//
      url: `www.${randomURL + rando(1, 200)}.com`,
      //-------------------------------------------------//
      location: `${rando(1, 401)}  ${randomURL} Ave, blk ${rando(
        0,
        9
      )} #${rando(1, 30)}-${rando(0, 600)} S${rando(1, 1000000)} `,
      //-------------------------------------------------//
    };
    setComponents([...components, newUser]);
  };

  //-----CSS CONTROL FOR ADDING NEW COMPONENTS-----//
  //---Container that wraps the container
  const addComponentBtnDiv = {
    fontFamily: "League Spartan",
    textAlign: "center",
    marginBottom: "5em",
  };
  //---CSS styling for the button itself
  const addComponentBtn = {
    marginTop: "5em",
    fontSize: "1.5em",
    fontFamily: "Roboto",
    background: "#003C43",
    color: "white",
    borderRadius: "50px",
  };
  //-----------------------------------------------//

  return (
    <div style={addComponentBtnDiv}>
      {components.map((user, index) => (
        <Namecard
          key={index}
          name={user.name}
          title={user.title}
          LogoURL={user.LogoURL}
          number={user.number}
          url={user.url}
          location={user.location}
        />
      ))}
      <button style={addComponentBtn} onClick={addComponent}>
        +++ New Component +++
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <RequirementsVideo />
      <h1 id={"gridComponent"}>Grid Component</h1>
      <GridContainer />
      <h1>Grid Component 2x2</h1>
      <GridApp2 />
      <h1>Grid Component 1x1</h1>
      <GridApp1 />
      <h1 id={"navibar"}>Navigation Bar Component</h1>
      <NavbarComponent />
      <h1 id={"colorcycle"}>Color Cycle</h1>
      <ColorCycleComponent />
      <ColorCycleBgComponent />
      <HorizontalBanner />
      <h1 id={"namecard"}>Name card Components</h1>
      <App />
      <h1 id={"footerComponent"}>Footer Components</h1>
      <FooterApp />
      <PaymentComponent />
      <PaymentApp />
      <AccordionComponent />
      <PhysicsComponent />
      <VideoComponentWrapper />
      <h1 id="webGL">WebGL interactive Canvas</h1>
    </div>
  </>
);
