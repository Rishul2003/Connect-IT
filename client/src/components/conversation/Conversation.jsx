import React, { useEffect, useState } from "react"
import './conversation.scss'
import { finduser } from "../../api/user";
const Conversation=function({conversation,currentuser}){
    // console.log(conversation);
    const [user,setuser]=useState(null);

    useEffect(()=>{
        const friendid=conversation.member.find((m)=>m!==currentuser._id)
        finduser(friendid).then((response)=>(setuser(response.data.data)));

    },[currentuser,conversation])

    return (
        user===null?<div>FOllow to chat</div>:
        <div className="conversation">
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="" /> */}
            <img src= {user.profilepic?user.profilepic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"} alt="" className="conversationimg" />
            <span className="conversationname">{user.name}</span>
        </div>
    )
}
export default Conversation;