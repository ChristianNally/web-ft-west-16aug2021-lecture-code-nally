// TodoItem
import React from 'react';

const Child = (props) => {
  console.log('child rerunning');
  // HTML template
  return (
    <h1>{props.data}</h1>
  );

};

export default Child;
