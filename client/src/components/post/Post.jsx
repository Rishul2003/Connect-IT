import React, { useEffect, useState } from "react"
import './post.scss'
import Singlepost from "./singlepost"
import axios from "axios"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useAuthmode } from "../../context/Authcontext"
import { makerequest } from "../../Axios";
import DoneIcon from '@mui/icons-material/Done';
import { usePostContext } from "../../context/Postcontext"
import { blue } from "@mui/material/colors"
import { useNavigate } from "react-router-dom"
// import { fetchpost } from "../../api/post"
const Post=function({userid}){

    const posts=usePostContext();
    const navigate=useNavigate();
    const [post,setpost]=useState(null);
    // console.log(userid);
    const fetchpost=async function(userid){
        try{
        const response=await axios.get(`http://localhost:8000/api/post?userid=${userid}`,{
            headers:{
                'jwt':localStorage.getItem("tokken")
            }
        })
        console.log(response);
        return response
    
    }
    catch(err){

        console.log(err.response.data);
        posts.setexpired(true)
        navigate(to='/login')
    }
    }

    useEffect(()=>{
       fetchpost(userid).then(
        (response)=>(setpost(response.data.posts))
       )
    },[])


    const user=useAuthmode();
    const [content,setcontent]=useState("");
    const [file,setfile]=useState(null);
    const[err,seterr]=useState(null);
    const handleClick=async function(e){
            e.preventDefault();
            console.log(content);
            if(content==""&& file==null){
                seterr("UPLOAD OR ADD SOMETHING FOR POST");
            }
            else{
                let formData = new FormData();
                if(content!=""){
                    formData.append('content',content);
                    // console.log("HELLO");

                }
                if(file){
                     formData.append('file',file);
                }
                try{  
                    // for (var pair of formData.entries()) {
                    //     console.log(pair[0]+ ', ' + pair[1]); 
                    // }
                    const response=await axios.post(`http://localhost:8000/api/post`,formData,{
                        credentials: 'include',
                        headers: {
                            'jwt':localStorage.getItem('tokken'),
                          'Content-Type': 'multipart/form-data',
                        },
                      });
                      console.log( "HERE AFTER RESPONSE")
                    console.log(response);
                    let val=response.data.newpost;
                    console.log(val);
                    
                    // console.log(posts.posts)

                    setpost([val,...post]);
                    setcontent("");
                    setfile(null);
                }
                catch(err){
                    console.log(err);
                }
            }
        
    }
    
    // const temporay=[
    //     {
    //         id:1,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
    //         img:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore repellat voluptas voluptatum commodi repellendus vero alias nisi? Aliquid at tempore totam molestiae tempora soluta, unde voluptatum deserunt dolores eaque."

    //     },
    //     {
    //         id:4,name:"JOHN SNOW",userid:4,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
    //         img:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore repellat voluptas voluptatum commodi repellendus vero alias nisi? Aliquid at tempore totam molestiae tempora soluta, unde voluptatum deserunt dolores eaque."

    //     },
    //     {
    //         id:3,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore repellat voluptas voluptatum commodi repellendus vero alias nisi? Aliquid at tempore totam molestiae tempora soluta, unde voluptatum deserunt dolores eaque."

    //     },
    //     {
    //         id:2,name:"JOHN SNOW",userid:3,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
    //         img:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080",

    //     }
    // ]
    return(
        <div className="posts">
            <div className="post">
                <div className="container">
                    <form action="" encType="multipart/form-data">
                    <div className="newpost">
                        <img src={user.currentuser.profilepic} alt="" />
                        <input type="text" placeholder="What's on your mind" name="content" onChange={(e)=>(setcontent(e.target.value))} value={content}/>

                    </div>
                    <div className="below">
                        <div className="file">
                        <label htmlFor="postfile">
                            <AddPhotoAlternateIcon style={{color:"#ff6b6bcb"}}  fontSize="large"/>
                            <span>add image</span>
                            
                        </label>
                        <input type="file" id="postfile" name="image" onChange={(e)=>(setfile(e.target.files[0]))} />
                        {file && <DoneIcon style={{fill:'blue'}}/>}
                        </div>
                        <button onClick={handleClick}>SEND</button>
                    </div>
                    </form>
                </div>
            </div>
            {post&&post.map((post)=>{
                return (
                    <Singlepost post={post} setpost={setpost} key={post._id} />
                )
            })}
        </div>
    )
}
export default Post;