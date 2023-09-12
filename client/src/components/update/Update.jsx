import { useState } from 'react';
import './update.scss'
import axios from 'axios';
import { useAuthmode } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';
const  Update=function({setupdate}){
    const navigate=useNavigate();
    const currentuser=useAuthmode();
    const userid=currentuser.currentuser._id;
    const [cover,setcover]=useState(null);
    const [profile,setprofile]=useState(null);
    const[name,setname]=useState("");
    const handleCloseClick = () => {
        setupdate(false);
      };
    const handleSubmit=async function(e){
        console.log(name);
        e.preventDefault();
        const formdata=new FormData();
        if(cover){
            formdata.append('coverphoto',cover)
        }
        if(profile){
            formdata.append('profilephoto',profile)
        }
        if(name!=""){
            formdata.append('name',name)
        }
        try{
            const response=await axios.post(`http://localhost:8000/api/user/update/${userid}`,formdata,{
                headers: {
                    'jwt':localStorage.getItem('tokken'),
                  'Content-Type': 'multipart/form-data',
                }
            });
            console.log("UPDATE ",response)
            currentuser.setcurrentuser(response.data.data)
        }
        catch(err){
            console.log("UPDATE ",err)
        if(err.status==400){
            navigate(to='/login');
        }
        }

    }

    return(
        <div className='update'>Update
        <form enctype="multipart/form-data">
            <label htmlFor="profilepic">CHOOSE PROFILE</label>
        <input type="file" name='profilepic' onChange={(e)=>(setprofile(e.target.files[0]))}/>
        <label htmlFor="coverphoto">CHOOSE cover photo</label>
        <input type="file" name='coverphoto'onChange={(e)=>(setcover(e.target.files[0]))}/>
        <input type="text" name='name' onChange={(e)=>(setname(e.target.value))}/>
        <button onClick={handleSubmit}>Update</button>
        </form>
            <button onClick={handleCloseClick}>X</button>
        </div>
    )
}
export default Update;