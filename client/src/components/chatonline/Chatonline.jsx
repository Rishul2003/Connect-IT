import { useEffect, useState } from 'react';
import './chatonline.scss';
import axios from 'axios';
const Chatonline=function({onlineusers,currentid,setcurrentchat}){
    const [friends,setfriends]=useState([]);
    const [onlinefriends,setonlinefriends]=useState([]);
    const getfriend=async function(){
        try{
        const res=await axios.get(`http://localhost:8000/api/friends/${currentid}`,{
            headers:{
                'jwt':localStorage.getItem("tokken")
            }
        })
        console.log(response);
        return response
    }
    catch(err){
        console.log(err);
    }
    }
    useEffect(()=>{
        getfriend().then(res=>(setfriends(res.data)));
    },[currentid])

    return(
        <div className="chatonline">
            <div className="chatonlinefriend">
                <div className="chatonlineimg">
                    <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                    <div className="chatonlinedot"></div>
                </div>
                <span>John DOE</span>
            </div>
            <div className="chatonlinefriend">
                <div className="chatonlineimg">
                    <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                    <div className="chatonlinedot"></div>
                </div>
                <span>John DOE</span>
            </div>
        </div>
    )
}
export default Chatonline