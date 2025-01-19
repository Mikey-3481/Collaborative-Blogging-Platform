import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import "../styles/Comment.css";
import { useDispatch } from "react-redux";
import { deleteComment } from "../redux/actions/commentActions";
import { AuthContext } from "../context/AuthContext";
import parse from "html-react-parser";

export default function Comment({ data }) {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);

  const handleDelete = () => {
    dispatch(deleteComment(data.id));
  };

  return (
    <div className="comment">
      <div className="commenter">
        <div className="commenter-avatar">
          <img src={data.avatar} alt="" />
        </div>
        <b className="commenter-name">{data.name}</b>
        <IconButton
          id={user.role === "contributor" ? "none" : ""}
          onClick={handleDelete}
        >
          <Delete />
        </IconButton>
      </div>
      <div className="comment-content">
        <div>{parse(data.comment)}</div>
        <p className="comment-created">{data.createdAt}</p>
      </div>
    </div>
  );
}
