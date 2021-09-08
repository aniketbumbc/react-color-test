import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState('MediumVioletRed');
  const [disable, setDisable] = useState(false);

  const newBtnColor =
    color === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{ backgroundColor: disable ? 'gray' : color }}
        onClick={() => setColor(newBtnColor)}
        disabled={disable}
      >
        Change to {newBtnColor}
      </button>
      <input
        type='checkbox'
        id='disabled-checkbox'
        defaultChecked={disable}
        aria-checked={disable}
        onChange={(e) => setDisable(e.target.checked)}
      />
      <label htmlFor='disabled-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
