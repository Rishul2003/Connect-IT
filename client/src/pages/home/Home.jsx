import React from "react";

import './home.scss';
import Postimage from "../../components/postimage/Postimage";
import Post from "../../components/post/Post";

const Home=function(){
    return (
        <div className="home">
            <Postimage />
            <Post />
        </div>
    )
}

export default Home;