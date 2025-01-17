import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../redux/actions/postActions";
import { Divider, Box, Button } from "@mui/material";
import renderElements from "../helpers/renderElement";
import Comment from "../utils/Comment";
import ErrorPage from "../utils/ErrorPage";
import Logo from "../utils/Logo";
import Loading from "../utils/Loading";
import "../styles/BlogPage.css";
import "quill/dist/quill.snow.css";
import useQuillEditor from "../hook/useQuillEditor";
import { AuthContext } from "../context/AuthContext";
import { fetchComments, leaveComment } from "../redux/actions/commentActions";

export default function BlogPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { commentLoading, commentSuccess, commentError } = useSelector(
    (state) => state.comment
  );
  const { loading, success } = useSelector((state) => state.post);
  const [comment, setComment] = useState(null);
  const { user } = useContext(AuthContext);
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
    quillRef.current.on("text-change", () => {
      const content = quillRef.current.root.innerHTML;
      setComment(content);
    });
  });

  const leaveMessage = () => {
    const newData = {
      avatar: user.avatar,
      name: user.name,
      comment: comment,
    };
    dispatch(leaveComment(newData));
  };

  useEffect(() => {
    dispatch(fetchBlogById(id));
    dispatch(fetchComments());
  }, []);

  useEffect(() => {
    renderElements(success?.content, "blog-paper");
  }, [success, loading, commentLoading, renderElements]);

  if (commentError) {
    return <ErrorPage error={commentError} />;
  }

  const Main = () => {
    return (
      <>
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
          {commentSuccess?.map((data, index) => (
            <Comment key={index} data={data} />
          ))}
        </Box>
      </>
    );
  };

  return (
    <div className="post-page">
      <div className="post-nav">
        <Logo path={null} />
      </div>
      <Divider />
      <div className="blog-main">
        {loading || commentLoading ? <Loading /> : <Main />}
        <Divider />
        <Box className="create-comment">
          <div id="create_comment"></div>
          <Button variant="contained" onClick={leaveMessage}>
            Post your comment
          </Button>
        </Box>
      </div>
    </div>
  );
}
