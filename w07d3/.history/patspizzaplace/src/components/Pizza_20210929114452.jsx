const { useState } = require("react");

const Pizza = (props) => {

  const [newTopping, setNewTopping] = useState('');
  const [crust, setCrust] = useState('gluten free');

  const [toppings, setToppings] = useState([]);


  const [pizza,setPizza] = useState({
    toppings: [],
    crustType: '',
    name: ''
  });


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
    props.countersetter(333);
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
      <div>
        <label>Type of Crust:({crust})</label>
        <input 
          value={crust}
          onChange={ (event) => setCrust(event.target.value) }
        />
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