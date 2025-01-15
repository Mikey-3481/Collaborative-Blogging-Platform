import React, { useEffect, useState, useContext } from "react";
import {
  TextField,
  Box,
  FormControl,
  FormLabel,
  Button,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../utils/Logo";
import "../../styles/Login.css";
import { loginUser } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.auth);
  const { updateUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
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

    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (success !== null) {
      updateUser(success);
      navigate("/dashboard");
    }
  }, [success]);

  return (
    <div className="login">
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
        <Link to="/register" underline="hover">
          Need an account?
        </Link>
        <FormControl>
          <FormLabel className="form-label">Email</FormLabel>
          <TextField
            placeholder="Enter your email account here"
            id="email"
            type="email"
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
        </FormControl>
        <FormControl>
          <FormLabel className="form-label">Password</FormLabel>
          <TextField
            type="password"
            placeholder="Enter your password here"
            id="password"
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
          {error === "Invalid email or password!" && (
            <Typography sx={{ color: "red", fontSize: "0.8rem" }}>
              {error}
            </Typography>
          )}
        </FormControl>
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Processing..." : "Log In"}
        </Button>
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
