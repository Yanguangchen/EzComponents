import React, { useState } from "react";
import videoSource3 from "./Assets/videoComponentShowcase.mp4";

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

    // Border
    borderRadius: "40px",
  };

  //-----------------END CSS styling for the video component-----------------

  return (
    <div>
      <h1>Video Component</h1>
      <div style={flexContainer}>
        <video
          style={videoWrapper}
          controls
          muted
          playsInline
          source
          src={videoSource3}
          type="video/mp4"
        ></video>
      </div>
      <p>Song credits: Landmine by post malone</p>
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
    background: "black",
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
