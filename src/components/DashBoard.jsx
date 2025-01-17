import React, { useEffect } from "react";
import PostListItem from "../utils/PostListItem";
import "../styles/DashBoard.css";
import { fetchPublishedBlogs, getBlogs } from "../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../utils/Loading";
import { useLocation } from "react-router-dom";

export default function DashBoard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, success } = useSelector((state) => state.post);

  useEffect(() => {
    if (location.pathname === "/admin-dashboard") {
      dispatch(getBlogs);
    } else if (location.pathname === "/dashboard") {
      dispatch(fetchPublishedBlogs);
    }
  }, [location.pathname, dispatch]);

  if (loading) {
    return (
      <div className="dashboard">
        <Loading />
      </div>
    );
  }

  if (Array.isArray(success)) {
    return (
      <div className="dashboard">
        {success.map((blog, index) => (
          <PostListItem key={index} blog={blog} />
        ))}
      </div>
    );
  }
}
