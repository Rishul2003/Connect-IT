// 82BVRAoQ5rh0tXzU
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
  Navigate,
  redirect
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';
import Leftbar from './components/leftbar/Leftbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useDarkmode } from './context/Darkmode';
import { useEffect } from 'react';
import { useAuthmode } from './context/Authcontext';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { usePostContext } from './context/Postcontext';


function App() {
  const posts=usePostContext();
  const darkm=useDarkmode();
  const User=useAuthmode();
  const currentUser=User.currentuser;
  console.log(darkm);
  // const currentUser=true;
  useEffect(()=> {
    posts.fetchpost();
    console.log(posts);
    
  },[posts.expired])
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
  const Secondroute=({children})=>{
    if(currentUser && !posts.expired){
      return <Navigate to='/'/>
    }
    return children
  }
  const ProtectedRoute=({children})=>{
    if(!currentUser||posts.expired){
      return <Navigate to="/login" />
    }
    return children
  }
  console.log(posts.expired)
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
      element: <Secondroute><Login /></Secondroute>
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
