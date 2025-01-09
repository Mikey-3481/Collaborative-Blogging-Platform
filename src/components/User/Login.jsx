import React from "react";
import { TextField, Box, FormControl, FormLabel, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../utils/Logo";
import "../../styles/Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="register-logo">
        <Logo />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "25ch" },
        }}
      >
        <Link to="/register" underline="hover">
          Need an account?
        </Link>
        <FormControl>
          <FormLabel className="form-label">Email</FormLabel>
          <TextField placeholder="Enter your email account here" id="name" />
        </FormControl>
        <FormControl>
          <FormLabel className="form-label">Password</FormLabel>
          <TextField
            type="password"
            placeholder="Enter your password here"
            id="password"
          />
        </FormControl>
        <Button variant="contained">Log In</Button>
      </Box>
    </div>
  );
}
