import { Route, RouterProvider, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CommentBox from "./components/CommentBox";
import ReplyBox from "./components/ReplyBox";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminDashUsers from "./components/AdminDashUsers";
import AdminDashProjects from "./components/AdminDashProjects";



function App() {
  return (
  <>

     <Navbar />
    {/* <Sidebar />  */}
     {/* <AdminDashUsers /> */}
     <AdminDashProjects />
    {/* <Login /> */}
    
    {/* <SignUp /> */}
    
  
  
 

</>
  );
}

export default App;
