import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../styles/CreateBlog.css";

export default function CreateBlog() {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) return;
    quillRef.current = new Quill("#create_blog", {
      modules: {
        toolbar: "#toolbar",
      },
      placeholder: "Write your blog here ...",
      theme: "snow",
    });
  }, []);

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
