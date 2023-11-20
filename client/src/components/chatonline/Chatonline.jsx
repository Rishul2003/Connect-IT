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
        // console.log(":FRIENDS ",res);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
    }
    useEffect(()=>{
        getfriend().then(res=>(setfriends(res.friends)));
    },[currentid])

    useEffect(()=>{
        setonlinefriends(friends.filter((friend) => onlineusers.some((onlineuser) => onlineuser.userid === friend._id))
        )
    },[friends,onlineusers]);
    // console.log(onlinefriends,"ONLINE ", onlineusers," hi ",friends);
    // console.log(friends,"YO");
    const handleclick=async function(user){
        try{
            console.log("HE::  LL ")
            console.log(currentid,user._id);
            const res=await axios.get(`http://localhost:8000/api/conversation/find/${currentid}/${user._id}`)
            // console.log(res);
            setcurrentchat(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    console.log("online friends,", onlinefriends);
    return(
        <div className="chatonline">
 
            {onlinefriends.map((o)=>
            (
            <div className="chatonlinefriend" onClick={()=>handleclick(o)}>
                <div className="chatonlineimg">
                    <img src={o.profilepic?o.profilepic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"} alt="" />
                    <div className="chatonlinedot"></div>
                </div>
                <span>{o.name}</span>
            </div>
            )
            )}
            {/* <div className="chatonlinefriend">
                <div className="chatonlineimg">
                    <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                    <div className="chatonlinedot"></div>
                </div>
                <span>JOHN DOE</span>
            </div> */}
        </div>
    )
}
export default Chatonline