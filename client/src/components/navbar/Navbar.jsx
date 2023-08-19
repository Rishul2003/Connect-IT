import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const Navbar=function(){
    return (
        <div className="navbar">
            <div className='left'>
                <Link to="/" style={{textDecoration:"none"}} > 
                <span>ConnectIT</span>
                </Link>
                <HomeOutlinedIcon  style={{cursor:'pointer'}}/>
                <DarkModeOutlinedIcon style={{cursor:'pointer'}} />
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
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMzMTI1Mw&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                <span>RISHUL ARORA</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar