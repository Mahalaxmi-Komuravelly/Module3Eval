import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        if(!email.includes('@')){
            alert("Invalid email");
            return;
        }
        if(password.trim.length < 6){
            alert("Invalid password");
            return;
        }
        
    }


  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
