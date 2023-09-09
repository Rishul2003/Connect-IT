import axios from "axios";

export const checkfriend=async function(input){
    let response=await axios.post(`http://localhost:8000/api/friends`,{input},{
        headers:{
            jwt: localStorage.getItem('tokken'),
        }
    })
    console.log("FRIENDS RESPONSE ",response)
    return response
}