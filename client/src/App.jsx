
import './App.scss'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';
import Leftbar from './components/leftbar/Leftbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useDarkmode } from './context/Darkmode';
import { useEffect } from 'react';
import { useAuthmode } from './context/Authcontext';
function App() {
  const darkm=useDarkmode();
  const User=useAuthmode();
  const currentUser=User.currentuser;
  console.log(darkm);
  // const currentUser=true;
  useEffect(()=>{
    localStorage.setItem("darkmode",darkm.darkmode);
  },[darkm.darkmode])
  const Layout=()=>{
    return (
      <div className={`theme-${darkm.darkmode?"dark":"light"}`}>
        <Navbar></Navbar>
        <div style={{display:'flex'}}>
          <Leftbar />
          <div style={{flex:6}}>
          <Outlet />

          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRoute> <Layout /></ProtectedRoute>,
      children:[{
        path:'/',
        element:<Home />
      },{
        path:'/profile/:id',
        element:<Profile />
      }]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
