import { Children, useState } from 'react'
import './App.css'
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
function App() {
  const currentUser=true;
  const Layout=()=>{
    return (
      <div>
        <Navbar></Navbar>
        <div style={{display:'flex'}}>
          <Leftbar />
          <Outlet />
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
