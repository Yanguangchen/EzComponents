import React, { useState } from "react";
import videoSource3 from "./Assets/videoComponentShowcase.mp4";

function VideoComponent() {
  const flexContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const videoWrapper = {
    width: "60%",
    borderRadius: "40px",
  };

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
  const addComponentBtnDiv = {
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: "5em",
  };
  //---CSS styling for the button itself
  const addComponentBtn = {
    marginTop: "5em",
    fontSize: "1.5em",
    fontFamily: "Roboto",
    background: "black",
    color: "white",
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
