const { useState } = require("react");

const Pizza = () => {

  const [newTopping, setNewTopping] = useState('');

  return (
    <div>
      <h2>Create Your Own Pizza!</h2>
      <div>
        <label>New Topping:</label>
        <input 
          value={}
          onChange={}
        />
      </div>
    </div>
  );

};