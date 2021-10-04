import './App.css';
import { useState} from "react";
import TodoItem from './components/TodoItem';

function App() {

  // storing the list of TodoItems as STATE

  const items = [];
  items.push('hello');
  items.push('world');
  items.push('monkey');
  items.push('fuzz');

  let output = '';

  for (let ii = 0 ; ii < items.length ; ii++){
    output += <TodoItem task={items[ii]}/>;
  }


  // const [items, setItems] = useState([]);

  return (
    <div className="App">
      { output }
    </div>
  );
}

export default App;
