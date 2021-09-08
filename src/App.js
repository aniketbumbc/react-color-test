import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [disable, setDisable] = useState(false);

  const newBtnColor = color === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newBtnColor)}
        disabled={disable}
      >
        Change to {newBtnColor}
      </button>
      <input
        type='checkbox'
        id='enable-checkbox'
        defaultChecked={disable}
        aria-checked={disable}
        onChange={(e) => setDisable(e.target.checked)}
      />
    </div>
  );
}

export default App;
