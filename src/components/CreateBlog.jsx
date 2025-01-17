import React, { useContext, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../styles/CreateBlog.css";
import { BlogContext } from "../context/BlogContext";

export default function CreateBlog() {
  const { blogData, updateBlogData } = useContext(BlogContext);
  const quillRef = useRef(null);
  console.log(blogData);

  useEffect(() => {
    if (quillRef.current) return;
    quillRef.current = new Quill("#create_blog", {
      modules: {
        toolbar: "#toolbar",
      },
      placeholder: "Write your blog here ...",
      theme: "snow",
    });

    if (blogData?.content) {
      quillRef.current.root.innerHTML = blogData.content;
    }

    quillRef.current.on("text-change", () => {
      const content = quillRef.current.root.innerHTML;
      updateBlogData({ content });
    });
  }, [blogData, updateBlogData]);

  return (
    <div className="create-blog">
      <div id="toolbar">
        <select className="ql-font"></select>
        <select className="ql-header"></select>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-image"></button>
        <button className="ql-code-block"></button>
      </div>
      <div className="create-blog-paper" elevation={3}>
        <div id="create_blog"></div>
      </div>
    </div>
  );
}
