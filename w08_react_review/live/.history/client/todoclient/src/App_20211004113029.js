import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import TodoItem from './components/TodoItem';

const axios = require('axios');

function App() {
  console.log('App component has rendered. i.e. executed');

  const [items, setItems] = useState([]); // establishes items as STATE

// useEffect is a way to contain side effect code
// useEffect will dictate when this code will run
  useEffect(()=>{
    console.log('useEffect axios getter has run.');
    axios.get('http://localhost:8080/todos')
    .then((res)=>{
      console.log('res:',res);
      setItems([...res.data]);
    });
  },[]);

  const onDeleteItem = (id) => {
    axios.post(`http://localhost:8080/todos/${id}/delete`)
    .then((res)=>{
      setItems(items.filter(item => item.id !== id));
    });
  };

  const toDoItemComponentsArr = [];
  for (const item of items) {
    toDoItemComponentsArr.push(<TodoItem key={item.id} id={item.id} onDelete={onDeleteItem} task={item.task}/>);
  }

  return (
    <div className="App">
      <h1>TODO List Items</h1>
      { toDoItemComponentsArr }
    </div>
  );
}

export default App;
