import React from "react";
import PostListItem from "../utils/PostListItem";
import "../styles/DashBoard.css";

export default function DashBoard() {
  return (
    <div className="dashboard">
      <PostListItem />
    </div>
  );
}
