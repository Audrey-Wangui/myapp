// Create a Fourthcomponent.jsx, have two variables i.e weight and height and bind them on the user interface. Then render the component on App.js
const Fourthcomponent = () =>{
    let weight = 52
    let height = 1.80
    return(
        <div className="Fourthcomponent">
            <h1>This is my fourth component</h1>
            <h5>The weight is: {weight}</h5>
            <h5>This is the height: {height}</h5>

        </div>

    )
}
export default Fourthcomponent;