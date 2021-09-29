const { useState } = require("react");

const Pizza = () => {

  const [newTopping, setNewTopping] = useState('');
  const [toppings,setToppings] = useState([]);

  const addTopping = () => {
    // DO NOT DO THIS!
    // toppings.push(newTopping);

    setToppings([newTopping]);

  };

  return (
    <div>
      <h2>Create Your Own Pizza!</h2>
      <div>
        <label>New Topping:({newTopping})</label>
        <input 
          value={newTopping}
          onChange={ (event) => setNewTopping(event.target.value) }
        />
        <button onClick={ addTopping }>Add Topping!</button>
      </div>
    </div>
  );

};

export default Pizza;