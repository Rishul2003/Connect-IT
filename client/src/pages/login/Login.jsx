import React from "react";
import { Link } from "react-router-dom";
import './login.scss';

const Login=function(){
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
                    <form action="">
                        <input type="text" placeholder="EMAIL"/>
                        <input type="PASSWORD" placeholder="password" />
                        
                        <button>LOGIN</button>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;