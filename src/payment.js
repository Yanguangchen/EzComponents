import React, { useState } from "react";

export function PaymentComponent() {

  //-----------------CSS styling for the payment component-----------------
  // paymentContainer
  const paymentContainer = {
    // Layout
    display: "flex",
    justifyContent: "center",
  };

  // cardVideo
  const cardVideo = {
    // Layout
    justifyContent: "center",
    alignItems: "center",
  };

  // paymentForm
  const paymentForm = {
    // Typography
    fontFamily: "Roboto",

    // Color
    background: "#222831",
    color: "white",

    // Border
    borderRadius: "40px",

    // Spacing
    padding: "2em",
  };

  // flexCardVideo
  const flexCardVideo = {
    // Layout
    display: "flex",
    flexDirection: "column",
  };

  // CVC
  const CVC = {
    // Dimensions
    width: "5em",
  };

  // Expiration
  const Expiration = {
    // Dimensions
    width: "10em",
  };

  // h2StylePayment
  const h2StylePayment = {
    // Spacing
    marginTop: "10em",
    marginBottom: "5em",

    // Typography
    fontFamily: "Roboto",
    textAlign: "center",
  };

  // payBtn
  const payBtn = {
    // Typography
    fontFamily: "roboto",
    fontSize: "2em",
    fontWeight: "900",

    // Border
    border: "0.5px solid white",
    borderRadius: "30px",

    // Spacing
    padding: "0.3em",
  };

  // payBtnDiv
  const payBtnDiv = {
    // Layout
    display: "grid",

    // Spacing
    marginBottom: "3em",
    height: "2em",

    // Typography
    fontFamily: "Roboto, arial",
  };

  // formSpacing
  const formSpacing = {
    // Spacing
    marginTop: "1.5em",
  };

  // inputFromClassInput
  const inputFromClassInput = {
    // Dimensions
    width: "25em",
    height: "2em",

    // Typography
    fontSize: "1em",

    // Spacing
    marginBottom: "4em",
  };

  // inputFromClass
  const inputFromClass = {
    // Layout
    display: "grid !important",
    justifyContent: "center",
    alignItems: "center",
  };

  // labelMarginTop
  const labelMarginTop = {
    // Spacing
    marginTop: "1em",
  };
    //-----------------END CSS styling for the payment component-----------------

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
  // addComponentBtn
  const addComponentBtn = {
    // Spacing
    marginTop: "5em",

    // Typography
    fontSize: "1.5em",
    fontFamily: "Roboto",

    // Color
    background: "black",
    color: "white",

    // Border
    borderRadius: "50px",
  };

  // addComponentBtnDiv
  const addComponentBtnDiv = {
    // Typography
    fontFamily: "Roboto",
    textAlign: "center",

    // Spacing
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
