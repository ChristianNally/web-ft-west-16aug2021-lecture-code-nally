const { useState } = require("react");

import './App.css';
import Header from './components/Header';
import Pizza from './components/Pizza';

function App() {

  const [counter,setCounter] = useState(0);

  // event handlers
  const setTheCounterInACustomWay = (power) => {
    // do some stuff
    setCounter(55**power);
  };

  const heading = `Pat's Pizza Place!`;

  return (
    <div className="App">
      <Header message={heading}/>
      <Pizza countersetter={setTheCounterInACustomWay}/>
    </div>
  );
}

export default App;
