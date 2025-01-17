import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toggleTtitleDialog } from "../../redux/actions/modalActions";
import { BlogContext } from "../../context/BlogContext";

export default function BlogTitle() {
  const [title, setTitle] = useState("");

  const { updateBlogData } = useContext(BlogContext);
  const { isTitleDialogOpen } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(toggleTtitleDialog());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      updateBlogData({ title: title, content: null });
    } catch (error) {
      return;
    } finally {
      handleClose();
      navigate("/create-blog");
    }
  };

  return (
    <>
      <Dialog
        open={isTitleDialogOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Title required</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create your new blog, please enter title of the blog here.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            label="title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
