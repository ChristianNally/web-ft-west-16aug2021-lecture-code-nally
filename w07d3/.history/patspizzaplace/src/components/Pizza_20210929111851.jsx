const { useState } = require("react");

const Pizza = () => {

  const [newTopping, setNewTopping] = useState('');
  const [toppings, setToppings] = useState([]);


  const addTopping = () => {

    // DO NOT DO THIS!
    // toppings.push(newTopping);

    // INSTEAD DO THIS!
    // setToppings( (prevToppings) => {
    //   const newState = [...prevToppings];
    //   newState.push(newTopping);
    //   return newState;
    // } );

    // OR EVEN BETTER
    setToppings( prev => [...prev, newTopping] );

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
        <button onClick={ alert() }>Monkey Fuzz!</button>
      </div>
      <div>
        {
          toppings.map( (item)=>{
          return <h4>{item}</h4>
          } )
        }
      </div>
    </div>
  );

};

export default Pizza;