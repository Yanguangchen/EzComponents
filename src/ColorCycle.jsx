//---------------------------------------------//
// CSS FILE DEPENDENCIES: ColorCycle.css
// CLASS NAME ColorCycleCSS
// REMEMBER TO LINK CSS FILE TO MAIN HTML
//---------------------------------------------//
import "./ColorCycle.css";
import videoSource from './Assets/colorCycleVideo.mp4'

function ColorCycleComponent() {
  const textWrapper = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "3em",
    flexDirection: "column",
  };

  const textStyle = {
    textAligh: "center",
    fontSize: "2.5em",
    fontWeight: "900",
  };

  const videoContainer = {
    display: "flex",
    justifyContent: "center",
  }
  const videoStyle = {
    width: "35%",
  };
  return (
    <div style={textWrapper} className="ColorCycleComponent">
      <div>
        <p style={textStyle} className="ColorCycleCSS">
          Super Charge Your Digital Business with
        </p>
      </div>

      <div style={videoContainer}>
        <video
        style={videoStyle}
          autoPlay
          muted
          playsInline
          source
          loop
          src={videoSource}
          type="video/mp4"
        ></video>
        </div>
      </div>
  );
}

export default ColorCycleComponent;
