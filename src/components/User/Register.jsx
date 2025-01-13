import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Box,
  FormControl,
  FormLabel,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import Logo from "../../utils/Logo";
import "../../styles/Register.css";
import { AuthContext } from "../../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.auth);

  const { updateUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters long";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    dispatch(registerUser({ name, email, password, role }));
  };

  useEffect(() => {
    if (success) {
      updateUser(success);
      navigate("/dashboard");
    }
  });

  return (
    <div className="register">
      <div className="register-logo">
        <Logo path={"/"} />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "25ch" },
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <FormControl>
          <FormLabel className="form-label">Name</FormLabel>
          <TextField
            placeholder="Enter your name here"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: errors.name ? "red" : "inherit",
              },
            }}
          />
          {errors.name && (
            <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
              {errors.name}
            </Typography>
          )}
        </FormControl>
        <FormControl>
          <FormLabel className="form-label">Email</FormLabel>
          <TextField
            type="email"
            placeholder="Enter your email here"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: errors.email ? "red" : "inherit",
              },
            }}
          />
          {errors.email && (
            <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
              {errors.email}
            </Typography>
          )}
          {error === "User already exists!" && (
            <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
              {error}
            </Typography>
          )}
        </FormControl>

        <FormControl>
          <FormLabel className="form-label">Password</FormLabel>
          <TextField
            type="password"
            placeholder="Enter your password here"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: errors.password ? "red" : "inherit",
              },
            }}
          />
          {errors.password && (
            <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
              {errors.password}
            </Typography>
          )}
        </FormControl>
        <FormControl>
          <FormLabel className="form-label">Auther</FormLabel>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            displayEmpty
            renderValue={(selected) =>
              selected === "" ? "Choose your auther role" : selected
            }
            sx={{
              color: role === "" ? "#9CA8B4" : "#000000DE",
            }}
          >
            <MenuItem value={"admin"}>admin</MenuItem>
            <MenuItem value={"editor"}>editor</MenuItem>
            <MenuItem value={"contributor"}>contributor</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Processing..." : "Sign Up"}
        </Button>
        <Link to="/login" underline="hover">
          Already have an account?
        </Link>
        {error === "Something went wrong!" && (
          <Typography
            sx={{ color: "red", fontSize: "0.8rem", marginTop: "1rem" }}
          >
            Something went wrong. Please try again.
          </Typography>
        )}
      </Box>
    </div>
  );
}
