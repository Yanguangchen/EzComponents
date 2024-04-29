import React from "react";
import videoSource1 from "./Assets/Requirements.mp4";
import videoSource2 from "./Assets/ModularShowcase.mp4";

function RequirementsVideo() {
  const videoStyle = {
    display: "flex",
    justifyContent: "center",
    columnGap: "10%",
  };

  const videoStylevideo = {
    width: "40%",
    border: "2px solid white",
    borderRadius: "30px",
  };

  const componentWrapper = {
    marginBottom: "5em",
    backgroundColor: "#00343B",
    paddingTop: "2em",
    paddingBottom: "2em",
  };

  return (
    <div style={componentWrapper}>
      <div style={videoStyle}>
        <video
          style={videoStylevideo}
          src={videoSource1}
          loop
          autoPlay
          muted
          playsInline
        >
          Opps element isnt working
        </video>
        <video
          style={videoStylevideo}
          src={videoSource2}
          loop
          autoPlay
          muted
          playsInline
        >
          Opps element isnt working
        </video>
      </div>
    </div>
  );
}

export default RequirementsVideo;
