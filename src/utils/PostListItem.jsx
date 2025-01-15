import React, { useContext } from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/PostListItem.css";

export default function PostListItem() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user)

  const ReadMore = ({ children }) => {
    const text = children.slice(0, 800);

    return (
      <p>
        {text}
        {"  . . . "}
        <Link to={"/post/:id"} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </p>
    );
  };

  return (
    <Paper className="post-paper" elevation={3}>
      <Box className="post-header">
        <Typography variant="h5" className="post-title">
          this is the title
        </Typography>
        <Typography className="psot-updated">4 years ago</Typography>
      </Box>
      <Box className="post-content">
        <Box className="post-img"></Box>
        <Box className="post-text">
          <ReadMore>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac. Consequat mauris nunc
            congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam
          </ReadMore>
        </Box>
      </Box>
      <IconButton
        id={user.role === "admin" ? "" : "none"}
        onClick={() => navigate("/edit-blog")}
      >
        <EditIcon />
      </IconButton>
    </Paper>
  );
}
