import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');

  const newBtnColor = color === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newBtnColor)}
      >
        Change to {newBtnColor}
      </button>
    </div>
  );
}

export default App;
