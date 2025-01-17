import React from "react";
import Logo from "./Logo";

export default function ErrorPage(error) {
  return (
    <div className="post-page">
      <div className="post-nav">
        <Logo path={null} />
      </div>
      <div className="blog-main">{error}</div>
    </div>
  );
}
