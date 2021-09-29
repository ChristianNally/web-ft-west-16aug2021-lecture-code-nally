const { useState } = require("react");

const Pizza = () => {

  const [newTopping, setNewTopping] = useState('');
  const [toppings,setToppings] = useState([]);

  return (
    <div>
      <h2>Create Your Own Pizza!</h2>
      <div>
        <label>New Topping:({newTopping})</label>
        <input 
          value={newTopping}
          onChange={ (event) => setNewTopping(event.target.value) }
        />
        <button onClick={ ()=>{ toppings.push(newTopping) } }>Add Topping!</button>
      </div>
    </div>
  );

};

export default Pizza;