//---------------------------------------------//
// CSS FILE DEPENDENCIES: ColorCycle.css
// CLASS NAME ColorCycleCSS
// REMEMBER TO LINK CSS FILE TO MAIN HTML
//---------------------------------------------//
import "./ColorCycle.css"

function ColorCycleComponent() {

  const textWrapper = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #003C43",
    backgroundColor: "#003C43",
  }

  const textStyle = {
    textAligh: "center",
    fontSize: "2.5em",
    fontWeight: "900",
  };

  return (
    <div style={textWrapper}>
      <p style={textStyle} className="ColorCycleCSS">Super Charge Your Digital Business</p>
    </div>
  );
}

export default ColorCycleComponent;
