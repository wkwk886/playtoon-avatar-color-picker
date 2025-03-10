import React, { useState } from 'react';
import './App.css';
import Avatar from './components/Avatar';
import ColorPicker from './components/ColorPicker';

function App() {
  // 设置默认卡片背景颜色（白色）
  const [cardBackgroundColor, setCardBackgroundColor] = useState('#FFFFFF');
  
  // 处理颜色变更
  const handleColorChange = (newColor) => {
    setCardBackgroundColor(newColor);
  };
  
  // 重置为默认颜色（白色）
  const handleReset = () => {
    console.log('Resetting color to white'); // 调试日志
    setCardBackgroundColor('#FFFFFF');
  };

  return (
    <div className="App">
      <div 
        className="card-container" 
        style={{ backgroundColor: cardBackgroundColor }}
      >
        <Avatar />
        <ColorPicker onColorChange={handleColorChange} />
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;