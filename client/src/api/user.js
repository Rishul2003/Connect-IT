import axios from "axios";

export const finduser=async function(userid){
    let response=await axios.get(`http://localhost:8000/api/user/find/${userid}`,{
        headers:{
            jwt: localStorage.getItem('tokken'),
        
        }
    });
    console.log(response);
    return await response;
}