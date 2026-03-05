import { useState } from "react";

const Fifthcomponent = () =>{

    // The useState() hook enables us to create dynamic websites whreby it usually has the start/initial state followed by a state that gets show when some effects happen on our website
    const[number, setNumber] = useState(10);
    return(
        <div className="Fifthcomponent">

            {/* Below we bind our value for number */}
            <h1>Welcome to my fifth component</h1>

            <h2>Current number is: {number}</h2>
            {/* Call the SetNumber function to update the number after a click effect. */}
            <button onClick={() => setNumber(20)}>Click to update the Number</button>

        </div>
    )
}

export default Fifthcomponent;

// Create a sixth component.jsx. Inside of it, have the useState with the initial value of weight being 50kg, have a button to update the weight to 55Kgs when the button is clicked. Render the component to App.js

// Research on routing in React.js