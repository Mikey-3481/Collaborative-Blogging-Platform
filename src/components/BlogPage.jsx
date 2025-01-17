import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../redux/actions/postActions";
import Quill from "quill";
import { Divider, Box, Button } from "@mui/material";
import renderElements from "../helpers/renderElement";
import Comment from "../utils/Comment";
import Logo from "../utils/Logo";
import Loading from "../utils/Loading";
import "../styles/BlogPage.css";
import "quill/dist/quill.snow.css";

export default function BlogPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const quillRef = useRef(null);
  const { loading, success } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [dispatch]);

  useEffect(() => {
    const container = document.getElementById("blog-paper");

    if (container) {
      container.innerHTML = "";
      renderElements(success?.content, "blog-paper");
    }
  }, [success]);

  useEffect(() => {
    if (quillRef.current) return;
    quillRef.current = new Quill("#create_comment", {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }],
        ],
      },
      placeholder: "Write your comment here ...",
      theme: "snow",
    });
  }, [loading, success]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="post-page">
      <div className="post-nav">
        <Logo path={null} />
      </div>
      <Divider />
      <div className="blog-main">
        <Box className="blog-paper">
          <div className="yellow-paper">
            <div className="fit-content">
              <h4 className="blog-title">{success?.title}</h4>
              <div id="blog-paper" />
            </div>
          </div>
        </Box>
        <Divider />
        <Box className="comments">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </Box>
        <Divider />
        <Box className="create-comment">
          <div id="create_comment"></div>
          <Button variant="contained">Post your comment</Button>
        </Box>
      </div>
    </div>
  );
}
