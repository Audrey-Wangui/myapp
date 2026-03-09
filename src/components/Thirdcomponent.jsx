const Thirdcomponent = () =>{
    // Variables enble us to create dynamic websites. (It means the content of the website will be changing over time.)
    // Below we declare some variables. Note: Variables are usually declaired just before the return statement in Reactjs.
    let name = "Audrey";
    let age = 18;
    let message = "I love programming"

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/* Below we bind our variables. We use the variable names that we had declaired before. */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And... {message}</h5>

        </div>
    )
}

export default Thirdcomponent;

