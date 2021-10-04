// TodoItem
import React from 'react';
import Child from './components/Child';

const TodoItem = (props) => {

  // HTML template
  return (
    <li>{ props.task } <button onClick={ () => { props.onDelete(props.id) } }>Delete</button><Child/></li>
  );

};

export default TodoItem;
