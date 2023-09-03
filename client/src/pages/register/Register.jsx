import React, { useState } from "react";
import { Link } from "react-router-dom";
import './register.scss';
import axios from "axios";
const Register=function(){
    const [input,setinput]=useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:""      
    })
    const [err,seterr]=useState(null);
    const handlechange=function(e){
        setinput(prev=>({...prev,[e.target.name]:e.target.value}));
        // console.log(input);
    }
    const handleclick=async function(e){
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:8000/api/auth/register",input);
            seterr(response.data);
            await setinput({
                name:"",
                email:"",
                password:"",
                confirmpassword:""
            })
        }
        catch(err){
            seterr(err.response.data);
        }
    }
    console.log(err);
    return (
        
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>CONNECT IT .</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem possimus recusandae nisi quidem culpa similique, ad nesciunt consequuntur facere atque dolor labore tenetur necessitatibus voluptatibus provident at, deleniti cumque sint.</p>
                    <span>
                        Do You have an account
                    </span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" placeholder="name" name="name" onChange={handlechange} value={input.name}/>
                        <input type="text" placeholder="email" name="email" onChange={handlechange} value={input.email}/>
                        <input type="PASSWORD" placeholder="password" name="password" onChange={handlechange} value={input.password}/>
                        <input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handlechange} value={input.confirmpassword}/>
                        <button onClick={handleclick}>Register</button>
                    </form>
                    {err && err}
                </div>
                
                <div className="only">
                <span>
                        Do You have an account
                    </span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;