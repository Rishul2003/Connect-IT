import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext=createContext(null);
export const useAuthmode=function(){
    return useContext(AuthContext);
};
export const AuthContextProvider=function({children}){
    const [currentuser,setcurrentuser]=useState(JSON.parse(localStorage.getItem("user"))||null);
    const login=()=>{
        //TODO
        setcurrentuser({id:1,name:"JOHN SNOW",profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080"});
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentuser));
    },[currentuser])
    return (

        <AuthContext.Provider value={{login,currentuser}}> {children} </ AuthContext.Provider>
    );
};