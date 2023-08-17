import React from "react";

import './register.scss';

const Register=function(){
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>CONNECT IT .</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem possimus recusandae nisi quidem culpa similique, ad nesciunt consequuntur facere atque dolor labore tenetur necessitatibus voluptatibus provident at, deleniti cumque sint.</p>
                    <span>
                        Do You have an account
                    </span>
                    <button>Login</button>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" placeholder="name"/>
                        <input type="text" placeholder="email"/>
                        <input type="PASSWORD" placeholder="password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button>Register</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;