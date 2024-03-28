//--------------MODULES-----------------//
import React from "react"; //
import ReactDOM from "react-dom/client"; //
//--------------------------------------//

function Namecard(props) {
  const defaultNamecardStyle = {
    //DISPLAY
    //BORDERS
    border: "1px solid black",
    borderRadius: "10px",
    //SIZING
    width: "400px",
    height: "200px",
    //TEXT
    textAlign: "center",
    fontFamily: "Arial",
  };

  //Name of the person
  const CardName = {
    textAlign: "left",
    marginLeft: "20px",
    marginTop: "10px",
    fontFamily: "Arial",
    fontSize: "120%",
    color: "red",
    fontWeight: "600",
    marginBottom: "0",
    overFlow: "hidden",
  };

  //bg image of card
  const BackgroundImage = {
    zIndex: "-2",
    position: "absolute",
    left: "9px",
    width: "400px",
    height: "200px",
  }

  //logo of the company
  const CompanyLogo = {
    zIndex: "-1",
    position: "absolute",
    left: "325px",
    top: "20px",
    width: "5%",
  }

  //title of the user
  const Title =  {
    textAlign: "left",
    marginLeft: "20px",
    fontFamily: "Arial",
    fontSize: "60%",
    color: "gray",
    marginLeft: "20px",
    marginTop: "3px",
  }

  return (
    <div style={defaultNamecardStyle}>
      <img style={BackgroundImage}src="/nameCards/default.png" alt="Default Namecard" />
      <img style={CompanyLogo} src="/logos/logo512.png" alt="company logo"></img>

      <p style={CardName}>{props.name}</p>
      <p style={Title}>{props.title}</p>
    </div>
  );
}

//----------CARD INFORMATION
//Enter information here
var userName = "Chen Yanguang"
var title = "ReactJs Engineer"

//---------------------------

const defaultNameCard = <Namecard name={userName} title={title} />;
//--------RENDER THE COMPONENT--------//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>{defaultNameCard}</>);
