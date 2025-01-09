import React, { useState, useEffect } from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Navbar from "./utils/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import SideBar from "./utils/SideBar";
import Main from "./utils/Main";

function App() {
  const [isHome, setIsHome] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggleDrawer = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const location = useLocation();
  const noNavRoutes = ["/", "/register", "/login"];

  useEffect(() => {
    if (noNavRoutes.includes(location.pathname)) {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <div className="App">
      {!isHome && <Navbar fn={toggleDrawer} />}
      <SideBar open={isOpenSideBar} />
      <Main open={isOpenSideBar}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/dashboard" Component={DashBoard} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/profile/:id" Component={Profile} />
          <Route path="/setting" Component={Setting} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
