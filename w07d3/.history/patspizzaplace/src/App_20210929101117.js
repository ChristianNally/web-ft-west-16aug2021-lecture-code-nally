import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header message={"Header Text As A Prop"}/>
      <Header/>
    </div>
  );
}

export default App;
