import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../redux/actions/postActions";
import { Divider, Box, Button } from "@mui/material";
import renderElements from "../helpers/renderElement";
import Comment from "../utils/Comment";
import Logo from "../utils/Logo";
import Loading from "../utils/Loading";
import "../styles/BlogPage.css";
import "quill/dist/quill.snow.css";
import useQuillEditor from "../hook/useQuillEditor";

export default function BlogPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, success } = useSelector((state) => state.post);
  const quillRef = useQuillEditor("#create_comment", {
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

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, []);

  useEffect(() => {
    renderElements(success?.content, "blog-paper");
  }, [success]);

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
              {loading && <Loading />}
              <h4 className="blog-title">{success?.title}</h4>
              {success && <div id="blog-paper" />}
            </div>
          </div>
        </Box>
        <Divider />
        <Box className="comments">
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
