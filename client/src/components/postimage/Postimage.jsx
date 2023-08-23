import { useAuthmode } from '../../context/Authcontext'
import './postimage.scss'
const Postimage=function(){
    const user=useAuthmode();
    const temporary=[
        {id:1,name:"JOHN SNOW",profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080"},
        {id:2,name:"JOHN SNOW",profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080"}
        ,{id:3,name:"JOHN SNOW",profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080"},{id:4,name:"JOHN SNOW",profilepic:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080"}
    ]



    return (
        <div className="postimages">
            <div className='postimage'>
                        <img src={user.currentuser.profilepic} alt="" />
                        <span>{user.currentuser.name}</span>
                        <button>+</button>
                    </div>


            {
                temporary.map(temp=>{
                    return(
                    <div className='postimage'>
                        <img src={temp.profilepic} alt="" />
                        <span>{temp.name}</span>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Postimage;