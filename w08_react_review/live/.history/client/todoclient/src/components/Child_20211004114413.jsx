// TodoItem
import React, { PureComponent } from 'react';

const Child = (props) => {
  console.log('child rerunning');
  // HTML template

  // props.setItems()

  return (
    <h1>{props.data}</h1>
  );

};

export default Child;
