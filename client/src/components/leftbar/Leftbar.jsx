import './leftbar.scss'
import friends from "../../assets/friends.png";
import groups from "../../assets/usergroup.png";
import events from "../../assets/events.png";
import gallery from "../../assets/gallery.png";
import play from "../../assets/play.png";
import watch from "../../assets/watch.png";
import message from "../../assets/message.png";


const Leftbar=function(){
    return (
        <div className="leftbar">
            <div className='container'>
                <div className='menu'>
                    <div className='user'>
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                        <span>RISHUL ARORA</span>
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