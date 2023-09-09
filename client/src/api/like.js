import axios from "axios";
export const checkpostlike=async function(postid){
    let response=await axios.get(`http://localhost:8000/api/likes?type=Post&id=${postid}`,{
        headers:{
            'jwt':localStorage.getItem('tokken')
        }
    })
    return await response;
}