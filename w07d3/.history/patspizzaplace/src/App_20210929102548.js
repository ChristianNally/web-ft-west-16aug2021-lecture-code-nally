import './App.css';
import Header from './components/Header';
import Pizza from '../../immutable/src/components/Pizza';

function App() {

  const heading = `Pat's Pizza Place!`;

  return (
    <div className="App">
      <Header message={heading}/>
      <Pizza/>
    </div>
  );
}

export default App;
