import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { DialogContentText } from "@mui/material";

export default function EditTitle({ open, setOpen }) {
  const { blogData, updateBlogData } = useContext(BlogContext);
  const [editedTitle, setEditedTitle] = useState(blogData.title);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateBlogData({ title: editedTitle });
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        component={"form"}
        open={open}
        onClose={handleClose}
        onSubmit={handleSave}
      >
        <DialogContent>
          <DialogContentText sx={{mb: "20px", fontSize: "small"}}>
            To save the changes to the title you made, you should click the Save
            button under the Blog settings before you leave.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            type="string"
            fullWidth
            defaultValue={blogData.title}
            variant="standard"
            sx={{ width: "100%" }}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
