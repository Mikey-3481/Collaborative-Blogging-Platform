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

function App() {
  const [isHome, setIsHome] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <div className="App">
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={DashBoard} />
        <Route path="/post/:id" Component={PostPage} />
        <Route path="/profile/:id" Component={Profile} />
        <Route path="/setting" Component={Setting} />
      </Routes>
    </div>
  );
}

export default App;
