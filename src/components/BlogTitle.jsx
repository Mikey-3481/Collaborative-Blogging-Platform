import React from "react";
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
import { toggleDialog } from "../redux/actions";

export default function BlogTitle() {
  const dispatch = useDispatch();
  const isDialogOpen = useSelector((state) => state.isDialogOpen);
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(toggleDialog());
  };

  return (
    <>
      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
            navigate("/create-blog");
          },
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
