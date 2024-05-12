import videosource from "./Assets/HorizontalVideo.mp4";

function HorizontalBanner() {
  const flexWrapper = {
    marginTop: "5em",
    display: "flex",
    justifyContent: "center",
    border: "0.5px dotted gray",
    borderRight: "none",
  };

  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "40% 60%",
    gridGap: "0",
    textAlign: "left",
    width: "100%",
  };

  const container1 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const container2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // const textAlightLeft1 = {
  //   textAlign: "center",
  //   fontSize: "1.5em",
  //   paddingLeft: "1em",
  //   paddingRight: "1em",
  //   lineHeight: "1.2em",
  //   paddingTop: "1em",
  //   paddingBottom: "1em",
  // }

  const textAlightLeft2 = {
    textAlign: "left",
    fontSize: "2em",
    paddingLeft: "1em",
    paddingRight: "1em",
    lineHeight: "1.2em",
    paddingTop: "1em",
    paddingBottom: "1em",
  };

  const videoStyle = {
    width: "100%",
  };

  return (
    <div style={flexWrapper}>
      <div style={gridContainer}>
        <div style={container1}>
          <video
            style={videoStyle}
            autoPlay
            muted
            playsInline
            source
            loop
            src={videosource}
            type="video/mp4"
          ></video>
        </div>
        <div style={container2}>
          <p style={textAlightLeft2} className="HorizontalText">
            The front end is where a business meets the customer, where the
            vision materializes into user experience. For agencies, mastering
            this is not just an advantage; it's a necessity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBanner;
