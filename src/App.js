import React, { useState } from 'react';
import './App.css';

function App() {
  const [Horizontal, setHor] = useState(10);
  const [Vertical, setVer] = useState(10);
  const [Blur, setBlur] = useState(5);
  const [Color, setColor] = useState("grey");
  const [checkOn, setCheck] = useState(false);
  return (
    <div className="App">
      <div className="control">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200"
          value={Horizontal} onChange={(e) => setHor(e.target.value)} />
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200"
          value={Vertical} onChange={(e) => setVer(e.target.value)} />
        <label>Blur</label>
        <input type="range" min="0" max="200"
          value={Blur} onChange={(e) => setBlur(e.target.value)} />
        <label>Set Color: </label>
        <input type="color" value={Color} onChange={(e) => setColor(e.target.value)} />
        <div className="switch">
          <label>
            Outline
            <input type="checkbox" checked={checkOn} onChange={() => setCheck(!checkOn)} />
            <span className="lever"></span>
            inset
          </label>
        </div>
      </div>

      <div className="output">
        <div className="box" style={{ boxShadow: `${checkOn ? "inset" : ""} ${Horizontal}px ${Vertical}px ${Blur}px ${Color}` }}>
          <p>Box-Shadow: {Horizontal}px {Vertical}px {Blur}px {Color}</p>
        </div>

      </div>
    </div>
  );
}

export default App;
