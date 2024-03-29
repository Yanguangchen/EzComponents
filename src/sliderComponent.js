//-----------IMPORT MODULES---------------//
import React, { useState } from "react"; //import useState module of react hooks
import ReactDOM from "react-dom/client";
//----------------------------------------//

function SliderComponent(props) {
  // Initialize the sliderValue state with the value from props if provided
  const [sliderValue, setSliderValue] = useState(props.initialValue);
  //---------------------------------------------------------------------------|
  //            SliderValue holds current value of the state                   |
  //setSliderValue is a function that you call to update value of sliderValue  |
  //---------------------------------------------------------------------------|

  // Handler function to update state and propagate the change upwards via props
  var handleSliderChange = function(event) {
    // CONVERT NUMBER TO EM STRING------------------//
    var newValueInEm = event.target.value + 'em';
    //----------------------------------------------//
    setSliderValue(newValueInEm);
  
    // If there is a function provided via props to handle the change, call it
    if (props.onValueChange) {
      props.onValueChange(newValueInEm);
    }
  };

    //-----SLIDER CSS CONTROL------//
    const sliderStyle = {
      marginTop: "10em",
    }

  return (
    <input
      type="range"
      min="1" //MIN value for slider
      max="4" //MAX value for slider
      value={parseInt(sliderValue, 10)} // Remove 'em' to work with the slider which expects a number
      onChange={handleSliderChange}
    />
  );
}

function App() {
  const [logoY, setLogoY] = useState(1.25);  // Assuming this is a numeric value
  const [logoSize, setLogoSize] = useState(50);  // Example initial size for logo (could be in percentage, em, pixels, etc.)

  return (
    <div>
      <SliderComponent
        initialValue={logoY}
        onValueChange={(value) => setLogoY(value + 'em')} // You can still convert to 'em' in the callback
        min={1}
        max={4}
      />
      {/* Example usage of SliderComponent for another variable */}
      <SliderComponent
        initialValue={logoSize}
        onValueChange={setLogoSize} // Directly update logoSize based on slider
        min={0}
        max={100}
      />
      <div style={{ top: `${logoY}em` }}></div>
      {/* Other components that use otherValue or logoY */}
    </div>
  );
}

export default SliderComponent;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
