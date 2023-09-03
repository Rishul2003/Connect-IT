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
const Singlepost=function({post}){
    // console.log("POSTS" ,post);
    const [time,settime]=useState("");

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
    const like=true;
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
                <MoreHorizIcon style={{cursor:'pointer'}}/>
            </div> 
            <div className="content">
                <p>
                    {post.content}
                </p>
                {post.image?<img src={post.image} ></img>:null}
            </div>
            <div className="info">
                <div className='item'>
                    {like? <FavoriteIcon className='like' style={{fill:'red'}} />:<FavoriteBorderOutlinedIcon className='like' style={{fill:'red'}}/>}
                    {/* <FavoriteIcon style={{fill:'red'}} /> */}
                    12 likes
                </div>
                <div className='item' onClick={()=>(setcomment(!comment))}>
                    <CommentRoundedIcon />
                    {/* <FavoriteIcon style={{fill:'red'}} /> */}
                    Comments
                </div>
            </div>      
            {comment?<Comment comments={post.comments}/>:null}  
            </div>
        </div>
    )
};
export default Singlepost