const Contactus = () =>{
    return(
        <div className = "Contactus">
            <h1>Contact us</h1>

            <form>
                <div>
                    <label>Name</label> <br />
                <input type="text" placeholder="Name"/>
                </div> <br />

                <div>
                    <label>Email</label> <br />
                <input type="text" placeholder="email"/>
                </div> <br />

                <div> 
                <label>Message</label><br />
             <textarea cols="20" rows="5" placeholder="message"></textarea>
                </div> <br />
            </form>

            <button>Send Message</button>

           
        </div>
    )
}

export default Contactus;