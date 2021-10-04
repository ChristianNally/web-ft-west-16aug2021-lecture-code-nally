// TodoItem
import React from 'react';

const TodoItem = (props) => {

  // HTML template
  return (
    <li>{ props.task } <button onClick={ () => { props.onDelete(props.id) } } >Delete</button></li>
  );

};

export default TodoItem;
