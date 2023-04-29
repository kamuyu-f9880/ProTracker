import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Projectdetails from "./components/projectdetails/Projectdetails";
import CommentBox from "./components/comments/CommentBox";
import ReplyBox from "./components/comments/ReplyBox";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp";
import CohortForm from "./pages/Cohort";
import ProjectsList from "./components/ProjectsList";

import { Provider } from "react-redux";
import store from "./store.js";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import UserProjectList from "./components/userprojectlist/userProjectList";
import AdminDashProjects from "./components/AdminDashProjects";
import AdminDashUsers from "./components/AdminDashUsers";
import CohortList from "./components/CohortList/cohortlist";
import Activities from "./components/Activities";
import AdminDashCohorts from "./components/AdminDashCohorts";
import { Router } from "react-router-dom/cjs/react-router-dom";
import UserBio from "./components/userBio/UserBio";

function App() {

  let role = localStorage.getItem("admin")

  console.log(role);

  return (
    // <Login/>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <div id="login-page">
              <Login />
            </div>
          </Route>
          <Route path="/projectList">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <UserProjectList />
              </div>
            </div>
          </Route>
          <Route path="/projectdetails">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <Projectdetails />
              </div>
            </div>
          </Route>
          <Route path="/adminprojects">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <AdminDashProjects />
              </div>
            </div>
          </Route>
          <Route path="/adminusers">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <AdminDashUsers />
              </div>
            </div>
          </Route>
          <Route exact path="/cohortlist">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <CohortList />
              </div>
            </div>
          </Route>
          <Route exact path="/activities">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <Activities />
              </div>
            </div>
          </Route>
          <Route path="/admincohorts">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <AdminDashCohorts />
              </div>
            </div>
          </Route>

          <Route path="/userProfile">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <UserBio/>
              </div>
            </div>
          </Route>

          <Route path="/signup">
            <div id="sidebar">
              <Sidebar />
            </div>
            <div id="main-body">
              <div id="nav-row">
                <Navbar />
              </div>
              <div id="body-row">
                <SignUp />
              </div>
            </div>
          </Route>

        </Switch>
      </div>
    </Provider>
  );
  
}
export default App;
