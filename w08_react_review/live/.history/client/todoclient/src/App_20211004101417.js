import './App.css';
import { useState} from "react";
import TodoItem from './components/TodoItem';

function App() {

  // storing the list of TodoItems as STATE

  if (0 < 1){
    const [items, setItems] = useState([]);
  }


  return (
    <div className="App">
      <TodoItem task="Buy The Milk"/>
    </div>
  );
}

export default App;
