// create a login function 
// return 2 input fields 
// create a button 
// create a handle click which displays a message 

export default function Login(){
    return (
        <>
        <h1>This is a login page</h1>
            <div>
                <form>
                    <input 
                    placeholder="Username"
                    type = "username"/>
                    <input 
                    placeholder="Password"
                    type = "password"/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}