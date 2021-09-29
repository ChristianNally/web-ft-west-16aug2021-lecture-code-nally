const { useState } = require("react");

import './App.css';
import Header from './components/Header';
import Pizza from './components/Pizza';

function App() {

  const [counter,setCounter] = useState(0);

  const heading = `Pat's Pizza Place!`;

  return (
    <div className="App">
      <Header message={heading}/>
      <Pizza/>
    </div>
  );
}

export default App;
