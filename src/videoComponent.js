import React from "react";
import videoSource from "./Assets/Requirements.mp4";

function RequirementsVideo() {
  const videoStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const videoStylevideo = {
    width: "50%",
    borderRadius: "5R0px",
  };

  return (
    <div style={videoStyle}>
      <video
        style={videoStylevideo}
        src={videoSource}
        loop
        autoPlay
        muted
        playsInline
      >
        Opps element isnt working
      </video>
    </div>
  );
}

export default RequirementsVideo;
