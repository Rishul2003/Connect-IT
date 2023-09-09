import { useState } from 'react';
import { useAuthmode } from '../../context/Authcontext'
import axios from 'axios';
import './comment.scss'
const Comment=function({comments,postid}){
    console.log(comments,postid);
    const [comment,setcomment]=useState(comments);
    const user=useAuthmode();
    const [content,setcontent]=useState({content:""});
    const[err,seterr]=useState(null);
    const handleclick= async function(e){
        e.preventDefault();
        console.log("HELLO");
        if(content==""){
            seterr("WRITE SOMETHING")
        }
        else{
            setcontent({content:content});
            console.log(content);
            seterr(null)
            try{
                const response=await axios.post(`http://localhost:8000/api/comments?postid=${postid}`,content,{
                    credentials: 'include',
                    headers: {
                        'jwt':localStorage.getItem('tokken')
                    }}
                    );   
                setcomment([response.data.comment,...comment])
                console.log(response.data.comment);
                setcontent({content:""});
            }
            catch(err){
                console.log(err);
                setcontent({content:""});
            }
        }

    }
    // const temporary=[
    //     {
    //         id:1,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quos deserunt eum et ipsum illum debitis exercitationem accusamus. Quo excepturi natus magni ducimus a. Vel quibusdam ex molestias consequuntur deserunt."
            
    //     },
    //     {
    //         id:2,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quos deserunt eum et ipsum illum debitis exercitationem accusamus. Quo excepturi natus magni ducimus a. Vel quibusdam ex molestias consequuntur deserunt."
            
    //     }
    // ]
    return (
        <div className="comments">
            {err && err}
            <div className="write">
                <img src={user.currentuser.profilepic} alt="" />
                <input type="text" name="content" id="" placeholder='Write your comment' value={content.content} onChange={(e)=>{setcontent(prev=>({...prev,[e.target.name]:e.target.value}))
                if(content!=""){
                    seterr(null)
                }}}/>
                <button onClick={handleclick}>send</button>
            </div>

            {comment.map(temp=>{
                return(
                    <div className="comment">
                        <img src={temp.user.profilepic} alt="" />
                        <div className="info">
                            <span>{temp.user.name}</span>
                            <p>{temp.content}</p>
                        </div>
                        <span className="date"></span>
                    </div>
                )
            })}
        </div>
    )
}
export default Comment