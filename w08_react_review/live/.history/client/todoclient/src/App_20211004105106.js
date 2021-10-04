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
    output += ;
  }


  // const [items, setItems] = useState([]);

  return (
    <div className="App">
      { items.map((item)=>{
        return <TodoItem task={item}/>
      }) }
    </div>
  );
}

export default App;
