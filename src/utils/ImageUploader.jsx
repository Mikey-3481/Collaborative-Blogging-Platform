import React, { useState } from "react";
import { Box } from "@mui/material";

function ImageUploader({ avatar, change }) {
  const [image, setImage] = useState(avatar);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        change(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      component="label"
      sx={{
        width: "200px",
        height: "200px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {image ? (
        <img
          src={image}
          alt="Uploaded"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <span>Click to upload</span>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </Box>
  );
}

export default ImageUploader;
