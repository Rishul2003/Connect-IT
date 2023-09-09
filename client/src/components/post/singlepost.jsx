import './singlepost.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import Comment from '../comments/Comments';
import { useState } from 'react';
import { useEffect } from 'react';
import { checkpostlike } from '../../api/like';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';
import { useAuthmode } from '../../context/Authcontext';

const Singlepost=function({post}){
    const currentuser=useAuthmode();
    // console.log("POSTS" ,post);
    const [time,settime]=useState("");
    let [val,setval]=useState(false);
    let [likecount,setlikecount]=useState(post.likes.length);


    const handleClick=async function(e){
        e.preventDefault();
        try{

            let response=await axios.post(`http://localhost:8000/api/likes?type=Post&id=${post._id}`,{},{
                 headers:{
                    credentials: 'include',
                    'jwt':localStorage.getItem('tokken')
                 }
            }
            )
            if(response.data.data){
                setlikecount(likecount-1);
                setval(false);
            }
            else{
                setlikecount(likecount+1);
                setval(true);
            }
            

        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(()=>{
        checkpostlike(post._id).then(response=>(setval(response.data)))
        // console.log("CHECK POST ",response);
    },[])
    // console.log(val);
    useEffect(() => {
        const currentTime = new Date();
        const updatedTime = new Date(post.updatedAt);
        const timeDifference = currentTime - updatedTime;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
    
        if (weeks > 0) {
          settime(weeks + ' weeks ago');
        } else if (days > 0) {
          settime(days + ' days ago');
        } else if (hours > 0) {
          settime(hours + ' hours ago');
        } else if (minutes > 0) {
          settime(minutes + ' minutes ago');
        } else {
          settime('just now');
        }
      }, [post.updatedAt]);

    const [comment,setcomment]=useState(false);
    const like=false;
  return(
        <div className='post'>
            <div className="container">
            <div className="user">
                <div className="userinfo">
                    {post.user.profilepic?<img src={post.user.profilepic} alt="" />:null}
                    
                    <div className='details'>
                        <Link to={`/profile/${post.user._id}`} style={{textDecoration:"none",color:'inherit'}}>
                            <span>{post.user.name}</span>
                        </Link>
                        <span>{time}</span>
                    </div>
                </div>
                {currentuser.currentuser._id==post.user._id?<ClearIcon style={{color:"red",cursor:"pointer",backgroundColor:"black"}}/>:null}
                
            </div> 
            <div className="content">
                <p>
                    {post.content}
                </p>
                {post.image?<img src={post.image} ></img>:null}
            </div>
            <div className="info">
                <div className='item' onClick={handleClick}>
                    {val? <FavoriteIcon className='like'  style={{fill:'red'}} />:<FavoriteBorderOutlinedIcon className='like' style={{fill:'red'}}/>}
                    {/* <FavoriteIcon style={{fill:'red'}} /> */}
                    {likecount} likes
                </div>
                <div className='item' onClick={()=>(setcomment(!comment))}>
                    <CommentRoundedIcon />
                    {/* <FavoriteIcon style={{fill:'red'}} /> */}
                    Comments
                </div>
            </div>      
            {comment?<Comment comments={post.comments} postid={post._id}/>:null}  
            </div>
        </div>
    )
};
export default Singlepost