import '../../components/navbar/navbar.scss'
import Navbar from "../../components/navbar/Navbar.jsx";
import React, { useEffect, useRef, useState } from "react";
import { ReactDOM } from "react";
import './chats.scss'
import { useDarkmode } from '../../context/Darkmode';
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/messages/Message';
import Chatonline from '../../components/chatonline/Chatonline';
import { useAuthmode } from '../../context/Authcontext';
import axios from 'axios';
import {io} from  'socket.io-client';
const Chats=function(){
    const [conversation,setconversation]=useState([]);
    const [currentchat,setcurrentchat]=useState(null);
    const [messages,setmessage]=useState([]);
    const[newmessage,setnewmessage]=useState("");
    const[arrivalmessage,setarrivalmesssage]=useState(null);
    const [onlineusers,setonlineusers]=useState([]);
    const user=useAuthmode();
    // const [socket,setsocket]=useState(null);
    const darkm=useDarkmode();
    const socket=useRef();
    const Scrollref=useRef();
    useEffect(()=>{
        socket.current=io("ws://localhost:8900");  
        socket.current.on("getmessage",data=>{
            console.log("DATA");
            setarrivalmesssage({
                sender:data.senderid,
                text:data.text,
                createdAt:Date.now()
            })
        })
    },[]);
    useEffect(()=>{
        arrivalmessage&& currentchat?.member.includes(arrivalmessage.sender)&&
        setmessage((prev)=>[...prev,arrivalmessage]);
    },[arrivalmessage,currentchat]);

    useEffect(()=>{
        socket.current.emit("adduser",user.currentuser._id)
        socket.current.on("getusers",(users)=>{
            // console.log("USERS");
            // console.log(users);
            setonlineusers(users);
        })
    },[user.currentuser])
    

    
    // console.log(socket?.id);
    const getConversation=async function(){
        try{
            const res=await axios.get(`http://localhost:8000/api/conversation/${user.currentuser._id}`,{
                headers:{
                    'jwt':localStorage.getItem("tokken")
                }})
                return await res;
                // setconversation(res.data);
                // console.log(conversation);
            }
            catch(err){
                console.log(err);
            }
        }
        useEffect(()=>{
            getConversation().then((res)=>(setconversation(res.data)));
            
        },[user.currentuser._id]);
        const getmessage=async function(){
            try{
                const res=await axios.get(`http://localhost:8000/api/message/${currentchat?._id}`,{
                    headers:{
                        'jwt':localStorage.getItem("tokken")
                    }})
                    
                    console.log(res);
                    return res;
                }
                catch(err){
                    
                }
            }
            useEffect(()=>{
                getmessage().then((res)=>(setmessage(res.data)));
            },[currentchat]);
            

            const handleconversationclick=function(c){
                setcurrentchat(c);
                // console.log(c);
                
            }
            const handlechatsubmit=async function(e){
                e.preventDefault();
                const message={
                    conversationid:currentchat._id,
                    sender:user.currentuser._id,
                    text:newmessage
                }
                const receiverid=currentchat.member.find(member=>member!==user.currentuser._id)
                socket.current.emit("sendmessage",{
                    senderid:user.currentuser._id,
                    receiverid:receiverid,
                    text:newmessage
                });
                try{
                    const res=await axios.post("http://localhost:8000/api/message",message,{
                        headers:{
                            'jwt':localStorage.getItem("tokken")
                        }}
                        )
                        console.log(res);
                        setmessage([...messages,res.data]);
                        setnewmessage("");
                        
                    }
                    catch(err){
                        console.log(err);
                    }
                }
                useEffect(()=>{
                    Scrollref.current?.scrollIntoView({behavior:"smooth",block: 'end' })
                },[messages])
                console.log("CONV ",currentchat);
                console.log(messages);
                console.log( user.currentuser);
                return (
                    <div className={`theme-${darkm.darkmode?"dark":"light"}`}>
            <Navbar />
            <div className='chats'>
                <div className="chatmenu">
                    <div className="chatmenuwrapper">
                        <input type="text" placeholder='search for friends' className='chatmenuinput'/>
                        {conversation.map((c)=>(
                            <div onClick={()=>(handleconversationclick(c))}>
                            <Conversation conversation={c} currentuser={user.currentuser}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatbox">
                    <div className="chatboxwrapper">
                        {
                            currentchat?
                        <>
                        <div className="chatboxtop">
                            <div ref={Scrollref}>
                            {messages.map(m=>(
                                <Message message={m} own={m.sender===user.currentuser._id} currentchat={currentchat}/>
                            ))}
                            </div>
                            {/* <Message />
                            <Message own={true}/>
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message /> */}
                        </div>
                        <div className="chatboxbottom">
                            <textarea name="" id="" placeholder='Chat ..' onChange={(e)=>(setnewmessage(e.target.value))} value={newmessage}>

                            </textarea>
                            <button  onClick={handlechatsubmit}>Send</button>
                        </div>
                        </>
                        : <span className='noconversationtext'>CLICK ON USER TO START A CONVERSATION</span>}
                    </div>
                </div>
                <div className="chatonlinebox">
                    <div className="chatonlinewrapper">
                        <Chatonline onlineusers={onlineusers} currentid={user.currentuser._id} setcurrentchat={setcurrentchat}/>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Chats;