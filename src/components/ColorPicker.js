import React from 'react';
import './ColorPicker.css';

const ColorPicker = ({ onColorChange }) => {
  const colorOptions = [
    '#4A90E2', 
    '#50E3C2', 
    '#F5A623', 
    '#D0021B', 
    '#9013FE', 
    '#8B572A', 
    '#000000', 
    '#7ED321'  
  ];

  //button 
  const handleColorButtonClick = (color) => {
    onColorChange(color);
  };

  return (
    <div className="color-buttons">
      {colorOptions.map((color, index) => (
        <button
          key={index}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => handleColorButtonClick(color)}
          aria-label={`Select color ${color}`}
        />
      ))}
    </div>
  );
};

export default ColorPicker;