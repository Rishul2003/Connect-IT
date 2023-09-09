import React from "react";

import './home.scss';
import Postimage from "../../components/postimage/Postimage";
import Post from "../../components/post/Post";
import { usePostContext } from "../../context/Postcontext";
import { useEffect } from "react";
const Home=function(){
 
    return (
        <div className="home">
            <Postimage />
            <Post />
        </div>
    )
}

export default Home;