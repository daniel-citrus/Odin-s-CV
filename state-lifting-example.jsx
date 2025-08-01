import React, { useState } from 'react';

// Child component that receives state and setter as props
const TemperatureDropdown = ({ temperature, onTemperatureChange, scale }) => {
  // Generate temperature options
  const generateOptions = () => {
    const options = [];
    if (scale === 'c') {
      for (let i = -50; i <= 150; i += 10) {
        options.push(i);
      }
    } else {
      for (let i = -58; i <= 302; i += 18) {
        options.push(i);
      }
    }
    return options;
  };

  return (
    <div>
      <label>Temperature in {scale.toUpperCase()}:</label>
      <select
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      >
        <option value="">Select temperature</option>
        {generateOptions().map((temp) => (
          <option key={temp} value={temp}>
            {temp}°{scale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

// Another child component that displays the converted temperature
const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

// Parent component that manages the shared state
const TemperatureCalculator = () => {
  // State is lifted to the parent component
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  // Helper function to convert temperatures
  const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };

  const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  // Convert temperature based on current scale
  const celsius = scale === 'f' ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

  // Handler for temperature changes
  const handleTemperatureChange = (value, scale) => {
    setTemperature(value);
    setScale(scale);
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      
      {/* Both dropdowns share the same state through props */}
      <TemperatureDropdown
        scale="c"
        temperature={scale === 'c' ? temperature : celsius}
        onTemperatureChange={(value) => handleTemperatureChange(value, 'c')}
      />
      
      <TemperatureDropdown
        scale="f"
        temperature={scale === 'f' ? temperature : fahrenheit}
        onTemperatureChange={(value) => handleTemperatureChange(value, 'f')}
      />
      
      <BoilingVerdict celsius={parseFloat(celsius) || 0} />
    </div>
  );
};

export default TemperatureCalculator;

// Usage example:
// <TemperatureCalculator /> 