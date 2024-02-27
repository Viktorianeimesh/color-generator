import { useCallback, useEffect } from "react";
import { useState } from "react"

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function generateRandomColor(length) {
    return Math.floor(Math.random()*length)
  }

  const handleCreateRandomHexColor = useCallback(() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for(let i=0; i < 6; i++) {
      hexColor += hex[generateRandomColor(hex.length)];
  }

    setColor(hexColor);
  }, [])

  const handleCreateRandomRgbColor = useCallback(() => {
    const r = generateRandomColor(256);
    const g = generateRandomColor(256);
    const b = generateRandomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`) 
  }, [])

  useEffect(() => {
    if (typeOfColor === 'rgb') {
      handleCreateRandomRgbColor()
    } else {
      handleCreateRandomHexColor()
    }
  }, [handleCreateRandomHexColor, handleCreateRandomRgbColor, typeOfColor])

  return (
    <div className="container" style={{ background: color }}>
      <div class="button_container">
        <button
          className="button"
          onClick={() => setTypeOfColor('hex')}
        >
          Create HEX Color
        </button>
        <button
          className="button"
          onClick={() => setTypeOfColor('rgb')}
        >
          Create RGB Color
        </button>
        <button
          className="button"
          onClick={typeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="display">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  )
}