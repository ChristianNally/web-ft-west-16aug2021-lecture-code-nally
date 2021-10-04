import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import TodoItem from './components/TodoItem';

const axios = require('axios');

function App() {

  // storing the list of TodoItems as STATE

  // const items = [];
  // items.push('hello');
  // items.push('world');
  // items.push('monkey');
  // items.push('fuzz');

  const [items, setItems] = useState([]); // establishes items as STATE

// useEffect is a way to contain side effect code
  useEffect(()=>{
    axios.get('http://localhost:8080/todos')
    .then((res)=>{
      console.log('res:',res);
      setItems([...res.data]);
    });
  },[]);

  return (
    <div className="App">
      { items.map((item)=>{
        return <TodoItem task={item}/>
      }) }
    </div>
  );
}

export default App;
