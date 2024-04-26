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

  const CVC = {
    width: "5em",
  };

  const Expiration = {
    width: "10em",
  };

  const h2StylePayment = {
    marginTop: "10em",
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: "5em",
  };

  const payBtn = {
    fontFamily: "roboto",
    fontSize: "2em",
    border: "0.5px solid white",
    padding: "0.3em",
    borderRadius: "30px",
    fontWeight: "900",
  };

  const payBtnDiv = {
    display: "grid",
    marginBottom: "3em",
    height: "2em",
    fontFamily: "Roboto, arial",
  };

  const formSpacing = {
    marginTop: "1.5em",
  };

  const inputFromClassInput = {
    width: "25em",
    height: "2em",
    fontSize: "1em",
    marginBottom: "4em",
  };

  const inputFromClass = {
    display: "grid !important",
    justifyContent: "center",
    alignItems: "center",
  };

  const labelMarginTop = {
    marginTop: "1em",
  };

  return (
    <div className="PaymentComponentWrapper">
      <h2 id={"payment"} style={h2StylePayment}>
        {" "}
        💳💳Payment Component💳💳
      </h2>
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
        <form style={paymentForm} className={inputFromClass}>
          <br></br>
          <label style={labelMarginTop}>Card Name:</label>
          <br></br>
          <input
            type="text"
            id="fname"
            name="fname"
            style={inputFromClassInput}
          ></input>

          <div style={formSpacing}>
            <p></p>
          </div>

          <label style={labelMarginTop}>Card Number:</label>
          <br></br>
          <input
            type="password"
            id="cardNum"
            name="cardNum"
            style={inputFromClassInput}
          ></input>
          <div className="formSpacing">
            <p></p>
          </div>

          <label style={labelMarginTop}>CVC:</label>
          <br></br>
          <input
            type="password"
            id={CVC}
            name="CVC"
            style={inputFromClassInput}
          ></input>
          <div className="formSpacing">
            <p></p>
          </div>

          <label style={labelMarginTop}>Expiration: MM/YYYY</label>
          <br></br>
          <input
            type="text"
            id={Expiration}
            name="Expiration"
            style={inputFromClassInput}
          ></input>
          <br></br>
          <div className="formSpacing">
            <p></p>
          </div>
          <div style={payBtnDiv}>
            <button style={payBtn} className="namecardWrapper">
              Pay
            </button>
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
