import React, { useState, useEffect } from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import BlogPage from "./components/BlogPage";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Navbar from "./utils/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import CreateBlog from "./components/CreateBlog";
import EditProfile from "./components/EditProfile";
import SideBar from "./utils/SideBar";
import Main from "./utils/Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";

const AppRoutes = () => (
  <Routes>
    <Route path="/" Component={Home} />
    <Route path="/register" Component={Register} />
    <Route path="/login" Component={Login} />
    <Route path="/dashboard" Component={DashBoard} />
    <Route path="/blog/:id" Component={BlogPage} />
    <Route path="/profile/:id" Component={Profile} />
    <Route path="/edit-profile/:id" Component={EditProfile} />
    <Route path="/setting" Component={Setting} />
    <Route path="/create-blog" Component={CreateBlog} />
    <Route path="/admin-dashboard" Component={DashBoard} />
    <Route path="/edit-blog" Component={CreateBlog} />
  </Routes>
);

function App() {
  const [isHome, setIsHome] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);

  const toggleDrawer = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const location = useLocation();
  const navRoutes = [
    "/dashboard",
    "/setting",
    "/create-blog",
    "/admin-dashboard",
    "/edit-blog",
  ];

  useEffect(() => {
    if (!navRoutes.includes(location.pathname)) {
      setIsOpenSideBar(false);
      setIsHome(true);
    } else {
      setIsHome(false);
    }

    if (
      ["/dashboard", "/admin-dashboard", "/edit-blog"].includes(
        location.pathname
      )
    ) {
      setIsOpenSideBar(true);
    }
  }, [location]);

  return (
    <div className="App">
      <Provider store={store}>
        <AuthProvider>
          <BlogProvider>
            {!isHome && <Navbar fn={toggleDrawer} />}
            <SideBar open={isOpenSideBar} />
            <Main open={isOpenSideBar}>
              <AppRoutes />
            </Main>
          </BlogProvider>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
