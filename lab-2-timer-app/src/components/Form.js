import { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
        setName('');
    }
    function handleName(e){
        setName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name 
                <input type="text" value={name} onChange={handleName}></input>
            </label><br></br>
            <label>
                Email 
                <input type="email" value={email} onChange={handleEmail}></input>
            </label><br></br>
            <label>
                Password 
                <input type="password" value={password} onChange={handlePassword}></input>
            </label><br></br>
            <button type = "submit">Register</button>
        </form>
    )
}

export default Form;