import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { json,redirect, useNavigate } from "react-router-dom";
export const PostContext=createContext();
export const usePostContext=function(){
    return useContext(PostContext)
};
export const PostContextProvider=function({children}){
    const [expired,setexpired]=useState(false);
    const fetchpost=async function(){
        try{
        const response=await axios.get("http://localhost:8000/api/post",{
            headers:{
                'jwt':localStorage.getItem("tokken")
            }
        })
        setposts(response.data.posts);
        setexpired(false);
    }
    catch(err){
        console.log(err.response);
        setexpired(true)
    }
    }
    const [posts,setposts]=useState(null);
    return(
        <PostContext.Provider value={{posts,setposts,fetchpost,expired}}>{children}</PostContext.Provider>
    );
};