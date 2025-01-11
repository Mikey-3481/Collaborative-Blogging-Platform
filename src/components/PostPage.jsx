import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "../styles/PostPage.css";
import "quill/dist/quill.snow.css";
import { Divider, Box, Button } from "@mui/material";
import Comment from "../utils/Comment";
import Logo from "../utils/Logo";

export default function PostPage() {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) return;
    quillRef.current = new Quill("#create_comment", {
      modules
      : {
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
  }, []);

  return (
    <div className="post-page">
      <div className="post-nav">
        <Logo isPath={false} />
      </div>
      <Divider />
      <div className="blog-main">
        <Box className="blog-paper"></Box>
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
