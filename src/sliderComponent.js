import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Slider component
function SliderComponent(props) {
  // Initialize the sliderValue state with the value from props if provided
  const [sliderValue, setSliderValue] = useState(props.initialValue);

  // Handler function to update state and propagate the change upwards via props
  const handleSliderChange = (event) => {
    // Convert the slider value (a string) to a value with em units
    const newValueInEm = `${event.target.value}em`;
    setSliderValue(newValueInEm);
    
    // If there is a function provided via props to handle the change, call it
    if (props.onValueChange) {
      props.onValueChange(newValueInEm);
    }
  };

  return (
    <input
      type="range"
      min="1" // You might want to adjust the min and max values to suit your needs
      max="100"
      value={parseInt(sliderValue, 10)} // Remove 'em' to work with the slider which expects a number
      onChange={handleSliderChange}
    />
  );
}

function App() {
  // State for the logo's Y position in 'em'
  const [logoY, setLogoY] = useState("1.25");

  return (
    <div>
      <SliderComponent
        initialValue={logoY}
        onValueChange={setLogoY} // Set the value of logoY when the slider changes
      />
      {/* Other components that use logoY */}
      <div style={{ top: `${logoY}em` }}> {/* Inline style using logoY */}</div>
    </div>
  );
}


export default SliderComponent;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
