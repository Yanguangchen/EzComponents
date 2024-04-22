import ReactDOM from "react-dom/client";
import React, { useState } from "react";

export function PaymentComponent() {
  const paymentContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const cardVideo = {
    justifyContent: "center",
    alignItems: "center",
  };

  const paymentForm = {
    fontFamily: "Roboto",
    background: "#222831",
    color: "white",
    borderRadius: "40px",
    padding: "2em",
  };

  const flexCardVideo = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="PaymentComponentWrapper">
      <h2 id={"payment"} >💳💳Payment Component💳💳</h2>
      <div style={paymentContainer}>
        <div style={cardVideo}>
          <div style={flexCardVideo}>
            <video src="Payments/MainVideo.mp4" autoPlay muted loop playsInline>
              Opps element isnt working
            </video>
            <video src="Payments/CCback.mp4" autoPlay muted loop playsInline>
              Opps element isnt working
            </video>
          </div>
        </div>
        <form style={paymentForm} className="inputFormClass">
          <br></br>
          <label>Card Name:</label>
          <br></br>
          <input type="text" id="fname" name="fname"></input>

          <div className="formSpacing">
            <p></p>
          </div>

          <label>Card Number:</label>
          <br></br>
          <input type="password" id="cardNum" name="cardNum"></input>
          <div className="formSpacing">
            <p></p>
          </div>

          <label>CVC:</label>
          <br></br>
          <input type="password" id="CVC" name="CVC"></input>
          <div className="formSpacing">
            <p></p>
          </div>

          <label>Expiration: MM/YYYY</label>
          <br></br>
          <input type="text" id="Expiration" name="Expiration"></input>
          <br></br>
          <div className="formSpacing">
            <p></p>
          </div>
          <div id="payBtn">
            <button className="namecardWrapper">Pay</button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export function PaymentApp() {
  const addComponentBtn = {
    marginTop: "5em",
    fontSize: "1.5em",
    fontFamily: "Roboto",
    background: "black",
    color: "white",
    borderRadius: "50px",
  };

  const addComponentBtnDiv = {
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: "5em",
  };

  // State to keep track of the payment components array
  const [paymentComponents, setPaymentComponents] = useState([]);

  // Function to add a new PaymentComponent
  const addPaymentComponent = () => {
    setPaymentComponents((prevComponents) => [
      ...prevComponents,
      PaymentComponent,
    ]);
  };

  return (
    <div className="App">
      {paymentComponents.map((Component, index) => (
        // Render each PaymentComponent from the state array
        <Component key={index} />
      ))}{" "}
      <div style={addComponentBtnDiv}>
        <button onClick={addPaymentComponent} style={addComponentBtn}>
          +++Add Payment Component+++
        </button>
      </div>
    </div>
  );
}
