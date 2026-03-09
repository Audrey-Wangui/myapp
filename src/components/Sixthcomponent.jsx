
// Create a sixth component.jsx. Inside of it, have the useState with the initial value of weight being 50kg, have a button to update the weight to 55Kgs when the button is clicked. Render the component to App.js

import { useState } from "react";

const Sixthcomponent = () =>{
    const[weight, setWeight] = useState(50);
    return(
        <div className="Sixthcomponent">
            <h1>This is my sixth component</h1>
            <h2>The current weight is: {weight}</h2>
            <button  onClick={() => setWeight(55)}>Add weight</button>
        </div>
    )
}

export default Sixthcomponent;