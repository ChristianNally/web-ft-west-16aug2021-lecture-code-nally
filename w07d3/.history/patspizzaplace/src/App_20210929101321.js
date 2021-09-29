import './App.css';
import Header from './components/Header';

function App() {

  const heading = `Pat's Pizza Place!`;

  return (
    <div className="App">
      <Header message={heading}/>
    </div>
  );
}

export default App;
