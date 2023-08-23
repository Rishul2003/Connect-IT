import { createContext, useContext } from "react";
import { useState } from "react";
export const DarkModeContext=createContext(null);
export const useDarkmode=function(){
    return useContext(DarkModeContext);
};
export const DarkModeContextProvider=function({children}){
    const [darkmode,setdarkmode]=useState(JSON.parse (localStorage.getItem("darkmode"))||false);
    
    const toggle=()=>{
        setdarkmode(!darkmode);
    }
    return (

        <DarkModeContext.Provider value={{toggle,darkmode}}> {children} </DarkModeContext.Provider>
    );
};