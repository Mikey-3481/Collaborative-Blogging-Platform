import React from "react";
import { TextField, Box, FormControl, FormLabel, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../utils/Logo";
import "../../styles/Register.css";

export default function Register() {
  return (
    <div className="register">
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
        <FormControl>
          <FormLabel className="form-label">Name</FormLabel>
          <TextField placeholder="Enter your name here" id="name" />
        </FormControl>
        <FormControl>
          <FormLabel className="form-label">Email</FormLabel>
          <TextField
            type="email"
            placeholder="Enter your email here"
            id="email"
          />
        </FormControl>
        <FormControl>
          <FormLabel className="form-label">Password</FormLabel>
          <TextField
            type="password"
            placeholder="Enter your password here"
            id="password"
          />
        </FormControl>
        <Button variant="contained">Sign Up</Button>
        <Link to="/login" underline="hover">
          Already have an account?
        </Link>
      </Box>
    </div>
  );
}
