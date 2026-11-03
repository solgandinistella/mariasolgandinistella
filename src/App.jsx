import { useState } from 'react';
import './App.css';

const PALETTE_COLORS = [
  '#000000', '#ffffff', '#ff4757', '#ffa502',
  '#2ed573', '#1e90ff', '#3742fa', '#70a1ff'
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState('#ff4757');
  const [pixels, setPixels] = useState(Array(256).fill('#ffffff'));

  const handlePixelClick = (index) => {
    const updatedPixels = [...pixels];
    updatedPixels[index] = selectedColor;
    setPixels(updatedPixels);
  };

  const clearCanvas = () => {
    setPixels(Array(256).fill('#ffffff'));
  };

  return (
    <div className="app-container">
      <h1>🎨 Pixel Art Editor</h1>
      <p>Selecciona un color y haz clic en las celdas para dibujar:</p>

      <div className="palette">
        {PALETTE_COLORS.map((color) => (
          <button
            key={color}
            className={`color-btn ${selectedColor === color ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      <div className="grid">
        {pixels.map((color, idx) => (
          <button
            key={idx}
            className="cell"
            style={{ backgroundColor: color }}
            onClick={() => handlePixelClick(idx)}
          />
        ))}
      </div>

      <div className="actions">
        <button className="clear-btn" onClick={clearCanvas}>
          Limpiar Lienzo
        </button>
      </div>
    </div>
  );
}
