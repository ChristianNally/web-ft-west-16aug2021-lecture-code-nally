const { useState } = require("react");

const Pizza = () => {


  const [counter,setCounter] = useState(0);

  const [newTopping, setNewTopping] = useState('');
  const [toppings, setToppings] = useState([]);

  const addTopping = () => {
    // DO NOT DO THIS!
    // toppings.push(newTopping);

    setCounter(counter + 1); // direct method
    setCounter(counter + 1); // direct method
    setCounter(counter + 1); // direct method

    setCounter( (prev)=> prev + 1 ); // callback method
    setCounter( (prev)=> prev + 2 ); // callback method
    setCounter( (prev)=> prev + 1 ); // callback method

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