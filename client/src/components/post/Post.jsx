import React from "react"
import './post.scss'
import Singlepost from "./singlepost"
const Post=function(){
    const temporay=[
        {
            id:1,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
            img:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore repellat voluptas voluptatum commodi repellendus vero alias nisi? Aliquid at tempore totam molestiae tempora soluta, unde voluptatum deserunt dolores eaque."

        },
        {
            id:4,name:"JOHN SNOW",userid:4,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
            img:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore repellat voluptas voluptatum commodi repellendus vero alias nisi? Aliquid at tempore totam molestiae tempora soluta, unde voluptatum deserunt dolores eaque."

        },
        {
            id:3,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore repellat voluptas voluptatum commodi repellendus vero alias nisi? Aliquid at tempore totam molestiae tempora soluta, unde voluptatum deserunt dolores eaque."

        },
        {
            id:2,name:"JOHN SNOW",userid:3,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
            img:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MjE3MzcxNw&ixlib=rb-4.0.3&q=80&w=1080",

        }
    ]
    return(
        <div className="posts">
            {temporay.map((post)=>{
                return (
                    <Singlepost post={post} key={post.id} />
                )
            })}
        </div>
    )
}
export default Post;