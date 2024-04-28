import React from "react";
import videoSource from "./Assets/Requirements.mp4";

function RequirementsVideo() {
  // videoStyle
  const videoStyle = {
    // Layout
    display: "flex",
    justifyContent: "center",
  };

  // videoStylevideo
  const videoStylevideo = {
    // Dimensions
    width: "50%",

    // Border
    borderRadius: "50px", // Please note that "5R0px" is not a valid value for borderRadius. I've assumed you meant "50px".
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
