import React, { useState } from "react";
import { TextField, InputAdornment, Box, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, signIn, signUpWithGoogle } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleProvider = () => {
    signUpWithGoogle(navigate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
        }}
        className="bgcinema"
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "250px" }}
            className="bgform"
          >
            <TextField
              id="outlined-basic"
              label="e-mail"
              variant="outlined"
              required
              size="small"
              margin="dense"
              color="secondary"
              helperText="Please enter your e-mail"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setEmail(e.target.value)}
              type="e-mail"
            />

            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              required
              size="small"
              margin="dense"
              color="secondary"
              helperText="Please enter your password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              role="button"
              className="links-a font-[0.75em] cursor-pointer decoration-none text-[#8f8f8f]"
              onClick={() => forgotPassword(email)}
            >
              Forgot Password
            </span>
            <Button variant="contained">LOGIN</Button>
            <Button
              onClick={handleGoogleProvider}
              variant="contained"
              color="warning"
            >
              SIGN IN WITH GOOGLE
            </Button>
          </Box>
        </form>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Link to="/register">Do you have not an account?</Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;
