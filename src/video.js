import React, { useState } from "react";
import videoSource3 from "./Assets/videoComponentShowcase.mp4";
import videoSource4 from "./Assets/videoComponentShowcase2.mp4";

function VideoComponent() {
  //-----------------CSS styling for the video component-----------------
  // flexContainer
  const flexContainer = {
    // Layout
    display: "flex",
    justifyContent: "center",
  };

  // videoWrapper
  const videoWrapper = {
    // Dimensions
    width: "60%",
    marginTop: "2em",

    // Border
    borderRadius: "40px",
    border: "2px solid black",
  };

  //-----------------END CSS styling for the video component-----------------

  return (
    <div>
      <h1>Video Component</h1>
      <div style={flexContainer}>
        <video
          style={videoWrapper}
          autoPlay
          muted
          playsInline
          source
          loop
          src={videoSource3}
          type="video/mp4"
        ></video>
      </div>
      <div style={flexContainer}>
        <video
          style={videoWrapper}
          autoPlay
          muted
          playsInline
          source
          loop
          src={videoSource4}
          type="video/mp4"
        ></video>
      </div>
    </div>
  );
}

function VideoComponentWrapper() {
  // addComponentBtnDiv
  const addComponentBtnDiv = {
    // Typography
    fontFamily: "Roboto",
    textAlign: "center",

    // Spacing
    marginBottom: "5em",
  };

  // addComponentBtn
  const addComponentBtn = {
    // Spacing
    marginTop: "5em",

    // Typography
    fontSize: "1.5em",
    fontFamily: "Roboto",

    // Color
    background: "#092635",
    color: "white",

    // Border
    borderRadius: "50px",
  };

  const [count, setCount] = useState(1);

  return (
    <div style={addComponentBtnDiv} id={"videoId"}>
      {[...Array(count)].map((_, i) => (
        <VideoComponent key={i} />
      ))}
      <div>
        <button style={addComponentBtn} onClick={() => setCount(count + 1)}>
          +++Add Video Component+++
        </button>
      </div>
    </div>
  );
}

export default VideoComponentWrapper;
