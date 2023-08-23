import { useAuthmode } from '../../context/Authcontext'
import './comment.scss'
const Comment=function(){
    const user=useAuthmode();
    const temporary=[
        {
            id:1,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quos deserunt eum et ipsum illum debitis exercitationem accusamus. Quo excepturi natus magni ducimus a. Vel quibusdam ex molestias consequuntur deserunt."
            
        },
        {
            id:2,name:"JOHN SNOW",userid:2,profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quos deserunt eum et ipsum illum debitis exercitationem accusamus. Quo excepturi natus magni ducimus a. Vel quibusdam ex molestias consequuntur deserunt."
            
        }
    ]
    return (
        <div className="comments">
            <div className="write">
                <img src={user.currentuser.profilepic} alt="" />
                <input type="text" name="" id="" placeholder='Write your comment'/>
                <button>send</button>
            </div>

            {temporary.map(temp=>{
                return(
                    <div className="comment">
                        <img src={temp.profilepic} alt="" />
                        <div className="info">
                            <span>{temp.name}</span>
                            <p>{temp.desc}</p>
                        </div>
                        <span className="date">1 hr ago</span>
                    </div>
                )
            })}
        </div>
    )
}
export default Comment