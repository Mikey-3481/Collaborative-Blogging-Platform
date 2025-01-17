import React, { useContext, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import "../styles/Comment.css";
import { useDispatch } from "react-redux";
import { deleteComment } from "../redux/actions/commentActions";
import { AuthContext } from "../context/AuthContext";
import renderElements from "../helpers/renderElement";

export default function Comment(data) {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);

  const handleDelete = () => {
    dispatch(deleteComment(data.id));
  };

  useEffect(() => {
    renderElements(data.comment, "comment-content");
  }, []);

  return (
    <div className="comment">
      <div className="commenter">
        <div className="commenter-avatar">
          <img src={data.avatar} alt="" />
        </div>
        <b className="commenter-name">{data.name}</b>
        <p>{data.createdAt}</p>
        <IconButton
          id={user.role === "contributor" ? "none" : ""}
          onClick={handleDelete()}
        >
          <Delete />
        </IconButton>
      </div>
      <div className="comment-content">
        <div id="comment-content" />
      </div>
    </div>
  );
}
