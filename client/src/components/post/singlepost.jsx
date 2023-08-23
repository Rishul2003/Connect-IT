import './singlepost.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import Comment from '../comments/Comments';
import { useState } from 'react';
const Singlepost=function({post}){
    const [comment,setcomment]=useState(false);
    const like=true;
  return(
        <div className='post'>
            <div className="container">
            <div className="user">
                <div className="userinfo">
                    <img src={post.profilepic} alt="" />
                    <div className='details'>
                        <Link to={`/profile/${post.userid}`} style={{textDecoration:"none",color:'inherit'}}>
                            <span>{post.name}</span>
                        </Link>
                        <span>1 min ago</span>
                    </div>
                </div>
                <MoreHorizIcon style={{cursor:'pointer'}}/>
            </div> 
            <div className="content">
                <p>
                    {post.desc}
                </p>
                {post.img?<img src={post.img} ></img>:null}
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
            {comment?<Comment/>:null}  
            </div>
        </div>
    )
};
export default Singlepost