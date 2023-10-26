import { useState } from 'react';
import './message.scss'
import { format, render, cancel, register } from 'timeago.js';
import { useAuthmode } from '../../context/Authcontext';
const Message=function({message,own,currentchat}){
    const user=useAuthmode();
    // console.log("current chat ",currentchat);
    return(
    <div className={own?"message own":"message"} >
        <div className="messagetop">
            <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
            {/* <img src={own?user.currentuser?.profilepic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"} alt="" /> */}
            <p>{message.text}</p>
        </div>
        <div className="messagebottom">
           {format(message.createdAt)}
        </div>
    </div>
    )
}
export default Message;