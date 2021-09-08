import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [disable, setDisable] = useState(false);

  const newBtnColor = color === 'red' ? 'blue' : 'red';

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
