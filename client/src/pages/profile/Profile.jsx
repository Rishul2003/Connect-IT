import React, { useEffect, useState } from "react";
import { red } from '@mui/material/colors';

const color = red[500];
import './profile.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Post from "../../components/post/Post";
import { useLocation } from "react-router-dom";
import { finduser } from "../../api/user";
import { useAuthmode } from "../../context/Authcontext";
import { checkfriend } from "../../api/friends";
import axios from "axios";

const Profile=function(){

    const currentuser=useAuthmode();
    const [data,setdata]=useState(null);
    const userid=useLocation().pathname.split("/")[2];
    // console.log(userid);
    const [isfriend,setisfriend]=useState(false);
    const input={
        currentuser:currentuser.currentuser._id,
        user:userid
    }
    const handleClick=async function(e){
        // console.log("CLICK ")
        e.preventDefault();
        let response= await axios.post(`http://localhost:8000/api/friends/toggle`,{input},{
            headers:{
                jwt: localStorage.getItem('tokken'),
            }
        })
        setisfriend(response.data.data);

    }
    


    useEffect(()=>{
        finduser(userid).then(response=>(setdata(response.data.data)));
        checkfriend(input).then((response)=>(setisfriend(response.data)));
    },[])




    // console.log(typeof(currentuser.currentuser._id),typeof(data._id))
    return (
        
        data===null?<h1>LOADING..</h1>:
        <div className="profile">
            <div className="images">
                <img className="cover" src={data.coverphoto ?data.coverphoto :"https://res.cloudinary.com/deuuxuy92/image/upload/v1693894745/no-image-icon-6_pt8ewu.png"} alt="" />
                <img className="profilepic" src={data.profilepic?data.profilepic:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"} alt="" />
            </div>

            <div className="profilecontainer">
                <div className="uinfo">
                <div className="left">
                    <HomeOutlinedIcon fontSize="large" style={{color:'gray'}}/>
                    <MessageOutlinedIcon 
                    style={{color:'gray'}} fontSize="large" />
                </div>
                <div className="centre">
                    <span>{data.name}</span>
                    {data._id==currentuser.currentuser._id?
                    <button>
                        Update
                    </button>:isfriend?<button onClick={handleClick} style={{backgroundColor:"#ED0800"}}>Unfollow</button>:<button onClick={handleClick} style={{backgroundColor:"#4681f4"}}>follow</button>}
                </div>
                <div className="right">
                    <MailOutlineIcon fontSize="large" style={{color:'gray'}}/>
                    <MoreHorizIcon  fontSize="large" style={{color:'gray'}}/>
                </div>
                </div>
                <Post userid={userid}/>
            </div>
        </div>
    )
}

export default Profile;



// "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080"