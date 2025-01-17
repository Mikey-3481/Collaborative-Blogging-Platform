import * as React from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleConfirmDialog } from "../../redux/actions/modalActions";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../redux/actions/postActions";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Confirm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isConfirmDialogOpen } = useSelector((state) => state.item);
  const { blogData, clearBlogData } = useContext(BlogContext);

  const handleClose = () => {
    dispatch(toggleConfirmDialog());
  };

  const handleDelete = () => {
    const blogId = blogData.id;
    dispatch(deletePost(blogId));
    dispatch(toggleConfirmDialog());
    clearBlogData();
    navigate("/admin-dashboard");
  };

  return (
    <React.Fragment>
      <Dialog
        open={isConfirmDialogOpen}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {"Are you sure really want to delete this blog?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This action can not be undo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="warning" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
