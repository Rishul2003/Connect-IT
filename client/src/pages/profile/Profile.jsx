import React from "react";
import { red } from '@mui/material/colors';

const color = red[500];
import './profile.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Post from "../../components/post/Post";

const Profile=function(){
    const color = red[500];
    return (
        <div className="profile">
            <div className="images">
                <img className="cover" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                <img className="profilepic" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
            </div>

            <div className="profilecontainer">
                <div className="uinfo">
                <div className="left">
                    <HomeOutlinedIcon fontSize="large" style={{color:'gray'}}/>
                    <MessageOutlinedIcon 
                    style={{color:'gray'}} fontSize="large" />
                </div>
                <div className="centre">
                    <span>JOHN SNOW</span>
                    <button>Follow</button>
                </div>
                <div className="right">
                    <MailOutlineIcon fontSize="large" style={{color:'gray'}}/>
                    <MoreHorizIcon  fontSize="large" style={{color:'gray'}}/>
                </div>
                </div>
                <Post />
            </div>
        </div>
    )
}

export default Profile;