import './leftbar.scss'
import friends from "../../assets/friends.png";
import groups from "../../assets/usergroup.png";
import events from "../../assets/events.png";
import gallery from "../../assets/gallery.png";
import play from "../../assets/play.png";
import watch from "../../assets/watch.png";
import message from "../../assets/message.png";
import { useAuthmode } from '../../context/Authcontext';


const Leftbar=function(){
    const user=useAuthmode();
    return (
        <div className="leftbar">
            <div className='container'>
                <div className='menu'>
                    <div className='user'>
                        <img src={user.currentuser.profilepic} alt="" />
                        <span>{user.currentuser.name}</span>
                    </div>

                    <div className="item">
                    <img src={friends} alt="" />
                    <span>Friends</span>

                </div>
                <div className="item">
                    <img src={groups} alt="" />
                    <span>Groups</span>
                    
                </div>
                <div className="item">
                    <img src={watch} alt="" />
                    <span>Watch</span>
                    
                </div>
                <div className="item">
                    <img src={events} alt="" />
                    <span>Events</span>
                    
                </div>
                <div className="item">
                    <img src={play} alt="" />
                    <span>play</span>
                    
                </div>

                </div>
                <hr />
                <div className="menu">
                    <span>Shortcuts</span>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>

                    </div>
                <div className="item">
                    <img src={groups} alt="" />
                    <span>Groups</span>
                    
                </div>
                <div className="item">
                    <img src={watch} alt="" />
                    <span>Watch</span>
                    
                </div>
                <div className="item">
                    <img src={events} alt="" />
                    <span>Events</span>
                    
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Leftbar