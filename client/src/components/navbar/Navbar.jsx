import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useDarkmode } from '../../context/Darkmode';
import { useAuthmode } from '../../context/Authcontext';
const Navbar=function(){
    const darkm=useDarkmode();
    const user=useAuthmode();
    const navigate=useNavigate();
    console.log(user)
    return (
        
        <div className="navbar">
            <div className='left'>
                <Link to="/" style={{textDecoration:"none"}} > 
                <span>ConnectIT</span>
                </Link>
                <HomeOutlinedIcon  style={{cursor:'pointer'}}/>
                {darkm.darkmode ?<WbSunnyOutlinedIcon onClick={darkm.toggle} style={{cursor:'pointer'}}></WbSunnyOutlinedIcon>:<DarkModeOutlinedIcon onClick={darkm.toggle} style={{cursor:'pointer'}}></DarkModeOutlinedIcon>}
                <div className="search">
                    <SearchIcon />
                    <input type="text" placeholder='search'/>
                </div>
            </div>
            <div className='right'>
                <PersonOutlineIcon  style={{cursor:'pointer'}}/>
                <MailOutlineOutlinedIcon  style={{cursor:'pointer'}}/>
                <NotificationsNoneOutlinedIcon  style={{cursor:'pointer'}}/>
                <div className='user'>
                    <img src={user.currentuser.profilepic} alt=""style={{cursor:'pointer'}} onClick={()=>(navigate(`/profile/${user.currentuser._id}`))}/>
                <span>{user.currentuser.name}</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar