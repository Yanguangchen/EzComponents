import ReactDOM from "react-dom/client";
import React from "react";

function PaymentComponent() {
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
    background: "black",
    color: "white",
    borderRadius: "40px",
    padding: "2em",
  };

  const flexCardVideo = {
    display: "flex",
    flexDirection: "column",
  };

  const cardImage = {};
  return (
    <div className="PaymentComponentWrapper">
      <h2>💳💳Payment Component💳💳</h2>
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
            <button>Pay</button>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default PaymentComponent;
