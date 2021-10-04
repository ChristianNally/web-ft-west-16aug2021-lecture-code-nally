// TodoItem
import React from 'react';

const Child = (props) => {

  // HTML template
  return (
    <li>{ props.task } <button onClick={ () => { props.onDelete(props.id) } } >Delete</button></li>
  );

};

export default Child;
