import ReactDOM from "react-dom/client";
import React from "react";

function PaymentComponent() {
  const paymentContainer = {
    display: "grid",
    justifyContent: "center",
  };

  const cardVideo = {
    justifyContent: "center",
    alignItems: "center",
  };

  const paymentForm = {
    fontFamily: "Roboto",
    textAlign: "center",
  }

  const cardImage = {};
  return (
    <div class>
      <h2>Payment Component</h2>
      <div style={paymentContainer}>
        <div style={cardImage}>
          <video src="Payments/MainVideo.mp4" autoPlay muted loop playsInline>
            Opps element isnt working
          </video>
        </div>
        <form style={paymentForm} className="inputFormClass">
          <label for="fname">First name:</label><br></br>
          <input type="text" id="fname" name="fname"></input><br></br>
          <div class="formSpacing"><p></p></div>

          <label for="lname">Last name:</label><br></br>
          <input type="text" id="lname" name="lname"></input><br></br>
          <div class="formSpacing"><p></p></div>

          <label for="cardNum">Card Number:</label><br></br>
          <input type="password" id="cardNum" name="cardNum"></input><br></br>
          <div class="formSpacing"><p></p></div>

          <label for="CVC">CVC:</label><br></br>
          <input type="password" id="CVC" name="CVC"></input><br></br>
          <div class="formSpacing"><p></p></div>

          <label for="EXP">Expiration: MM/YYYY</label><br></br>
          <input type="text" id="Expiration" name="Expiration"></input><br></br>
          <div class="formSpacing"><p></p></div>

          <input type="submit"></input>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default PaymentComponent;
