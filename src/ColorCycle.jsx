//---------------------------------------------//
// CSS FILE DEPENDENCIES: ColorCycle.css
// CLASS NAME ColorCycleCSS
// REMEMBER TO LINK CSS FILE TO MAIN HTML
//---------------------------------------------//
import "./ColorCycle.css";

function ColorCycleComponent() {
  const textWrapper = {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #003C43",
    marginBottom: "3em",
  };

  const textStyle = {
    textAligh: "center",
    fontSize: "2.5em",
    fontWeight: "900",
  };

  return (
    <div style={textWrapper}>
      <div>
        <p style={textStyle} className="ColorCycleCSS">
          Super Charge Your Digital Business with
        </p>
      </div>
      <div>
      </div>
    </div>
  );
}

export default ColorCycleComponent;
