import React from "react";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import "../styles/Comment.css";

export default function Comment() {
  return (
    <div className="comment">
      <div className="commenter">
        <div className="commenter-avatar"></div>
        <b className="commenter-name">Michael</b>
        <IconButton><Delete /></IconButton>
      </div>
      <div className="comment-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices.
      </div>
    </div>
  );
}
