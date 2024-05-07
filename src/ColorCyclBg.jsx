//---------------------------------------------//
// CSS FILE DEPENDENCIES: ColorCycle.css
// CLASS NAME ColorCycleCSS
// REMEMBER TO LINK CSS FILE TO MAIN HTML
//---------------------------------------------//

function ColorCycleBgComponent() {
  const textWrapper = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #003C43",
    color: "white",
  };

  const textStyle = {
    textAligh: "center",
    fontSize: "2.5em",
    fontWeight: "900",
  };

  return (
    <div style={textWrapper} className="ColorCycleCSSBG">
      <div>
        <p style={textStyle}>
          Super Charge Your Digital Business with
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default ColorCycleBgComponent