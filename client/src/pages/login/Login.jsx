import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.scss';
import { useAuthmode } from "../../context/Authcontext";
import { useState } from "react";
const Login=function(){
    const navigate=useNavigate();
    const user=useAuthmode();
    const [err,seterr]=useState(null);
    const [input,setinput]=useState({
        email:"",
        password:"",
      })
      const handlechange=function(e){
        setinput(prev=>({...prev,[e.target.name]:e.target.value}));
        // console.log(input);

    }
    const handleClick= async function(e){
        e.preventDefault();
        try{
            await user.login(input);
            navigate("/");
            setinput({
                email:"",
                password:""
            })
        }
        catch(err){
            seterr(err);
        }
        console.log(err);
    }
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello WOrld .</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem possimus recusandae nisi quidem culpa similique, ad nesciunt consequuntur facere atque dolor labore tenetur necessitatibus voluptatibus provident at, deleniti cumque sint.</p>
                    <span>
                        Don't YOu have an account
                    </span>
                    <Link to="/register"> 
                    <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>LOGIN</h1>
                    <form action="/api/auth/login">
                        <input type="text" placeholder="EMAIL" name="email" onChange={handlechange} value={input.email}/>
                        <input type="PASSWORD" placeholder="PASSWORD" name="password" onChange={handlechange} value={input.password}/>
                        
                        <button onClick={handleClick}>LOGIN</button>
                        
                    </form>
                </div>
                <div className="only">
                <span>
                        Don't YOu have an account
                    </span>
                    <Link to="/register"> 
                    <button>Register</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Login;